import { PointsModel ,PointsSettingsModel,PointsTransactionsModel,walletSettingsModel,WalletModel} from '@app/common';


export const addPointsForUser = async (order: any) => {
    console.log("order .....>",order);
    try { 
        // calculate points based on order price and point sitting
        const point_count = await calculatePoints(order.total)

        // store points in points table (order_id,user_id,count)
        const data = { order_id: order.id, user_id: order.user_id, count: point_count }
        const point = await PointsModel.query().insert(data)
        console.log("point inserted >>>>",point);
        
        return point

    } catch (error) { 
        console.log("point error ====>",error);
        
        return error
    }

}

async function calculatePoints(price: number) {

    // get setting from point setting
    const point_settings = await PointsSettingsModel.query().first()


    //count= points_cost * order_price

    return Math.floor(price / point_settings.point_cost);
}

export async function transferPoints(count:number,user_id:number) {

    // get points settings
    const points_settings = await PointsSettingsModel.query().first()
    // get all points for this user
    const point = await PointsModel.query().where('user_id', user_id).sum("points.count as TotalPoints").first()
    // check minwith drower
    if( points_settings.min_withdrawal > point.TotalPoints ) return "cant transfer"

    const wallet_setting = await walletSettingsModel.query().where("wallet_type_id",20).first()
    
    // return wallet_setting;
    const Wallet = { 
        wallit_type_id: wallet_setting.wallit_type_id,
        value:count*points_settings.point_price,
        percentage:wallet_setting.gift_discount,
        maximum:wallet_setting.gift_max,
        minimum:wallet_setting.gift_min
    }
    
      
      
    // insert wallit 
    const wallet = await WalletModel.query().insert(Wallet)

    // insert ctx
    const trx:any ={
        count:wallet.value,
        user_id:user_id,
        wallit_id:wallet.id

    }
    const trx2 = await PointsTransactionsModel.query().insert(trx);
    return trx2;

}