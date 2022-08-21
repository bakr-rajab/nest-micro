import { addPointsForUser ,OrdersModel,PaymentTypesModel,RatesModel,GetCommissionForSata,CreateCopounsForUser, transferPoints} from '@app/common';
import { Body, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/CreateOrder.dto';


@Injectable()
export class OrdersService {
  async create( data: any) {

    data.created = new Date()
    data.commission = await GetCommissionForSata(data)
    const myorderss = await OrdersModel.query().insertGraph(data)
    const copouns = await CreateCopounsForUser(data.user_id, data.total, myorderss.id)
    const addPoints= await addPointsForUser(myorderss)

    console.log("add point >>>",addPoints);
    
    const myorders = await OrdersModel.query().first()
      .andWhere("orders.id", myorderss.id)
      // .withGraphFetched('[order_details.[menu_categories_items,order_details_options.menu_options],branches,users,billing_address,order_status,paymenttype]')
    //   io.emit("makeNewOrderToBranch",myorders)

    return myorders

  }

  async getUserOrders(user: any) {
    console.log(user)
    const myorders = await OrdersModel.query()
        .select(['branches:restaurant.name', 'orders.*', 'branches.user_id as BranchUserId'])
        .joinRelated('[branches.restaurant]')
      .withGraphFetched('[order_details.[menu_categories_items,order_details_options.menu_options],paymenttype,users]')
        .where('orders.user_id', user).orderBy('orders.created ', 'desc')
      .modifiers({
        filterUser: query => query.select('username')
      });
    return myorders
  }
  async FindBestSellerItems(name: string) {
    const currentday = new Date();
    currentday.setDate(currentday.getDate() + 1);

    var date = new Date(), y = date.getFullYear(), m = date.getMonth();
    var firstDay = new Date(y, m, 1);
    const t = new Date().getDate() + (6 - new Date().getDay() - 1) - 7;
    const lastFriday = new Date();
    lastFriday.setDate(t);

    if (name == "ar") {
      name = "name";
    }
    else {
      name = "name_en";

    }
    const BestSeller = await OrdersModel.query().joinRelated('orders').whereBetween('order_details.created', [firstDay, currentday]).sum('order_details.amount as itemamount').sum('order_details.total as itemtotal').withGraphFetched('[menu_categories_items]')
      .groupByRaw("order_details.menu_categories_itemId").orderBy('itemamount', 'desc');
    return {
      success: true,
      message: 'Post details fetch successfully.',
      data: BestSeller,
    }
  }
  async rate(data) {

    const myorders = await RatesModel.query().insert(data)
    return myorders

  }

  async paymentTypes(req:any) {

    var name = req["lang"];
    if (name == "ar") {
      name = "name";
    }
    else {
      name = "name_en";

    }
    const address = await PaymentTypesModel.query().select('id', '' + name + ' as name')
    return address

  }

  async transferPoints(req: any){
    return await transferPoints( req.count,req.user_id)
  }

}
