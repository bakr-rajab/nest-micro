import { Model } from "objection";

export  class ConfirgrationsModel extends Model {
    percentage: any;
  value: any;

    static get tableName() {
      return 'configrations';
    }

  }