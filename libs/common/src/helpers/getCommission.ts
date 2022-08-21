import {RestaurantModel,ConfirgrationsModel,BranchesModel,Categories} from "@app/common"


export  async function GetCommissionForSata(req:any){

    var  total = 0
    const RestauranthId = await BranchesModel.query().select('branches.restaurantsId','branches.id as BranchId').where('branches.id',req.branch_id).first()

    const Restaurant = await RestaurantModel.query().select('restaurants.id','restaurants.discount_percentage','restaurants.discount_to','restaurants.category_id').where('id',RestauranthId.restaurantsId).first()

    const setting = await ConfirgrationsModel.query()
if (req.takeway == 1) { // لو الاوردر استلام من الفرع
  total = (req.total  *  setting[4].value / 100!)
}else {
if (Restaurant.discount_percentage! > 0)  {


  const dateOne = new Date(Restaurant.discount_to!)
  const dateTwo = new Date()
  var checkdate = dateOne > dateTwo

  if (checkdate == true) {

    total = (req.total  * Restaurant.discount_percentage!) / 100

  }else {
    const Category = await Categories.query().where('id',Restaurant.category_id).first()
    total = (req.total  * (Category.percentage!)) / 100
  }

}else {

  const Category = await Categories.query().where('id',Restaurant.category_id).first()
  total = (req.total  * Category.percentage!) / 100

}
}
total =  total + (total * setting[0].value / 100) // وضع الضريبة المضافة للشركة
  return total

}
