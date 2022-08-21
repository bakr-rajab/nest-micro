import { CopounSettingsModel } from "@app/common"

export async function CreateCopounsForUser(user:number,total:number,order_id:number){
    const setting = await CopounSettingsModel.query().first()
  const numberOfCopouns = Math.floor(total / setting.min_number_copouns!!) 
  if (numberOfCopouns > 0) {
    for (let index = 0; index < numberOfCopouns; index++) {}
  
  }
}