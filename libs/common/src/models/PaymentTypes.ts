import { Model } from "objection";


 export  class PaymentTypesModel extends Model {

    static get tableName() {
      return 'paymenttypes';
    }

  }