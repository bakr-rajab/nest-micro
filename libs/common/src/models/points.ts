import { BaseModel } from './base.model';
// import { CommentModel } from './comment.model';
import { Model } from 'objection';
import { UserModel } from './user.model';
import {OrdersModel} from './OrdersModel';
import {UsersModel} from './Users';

export class PointsModel extends BaseModel {
  static get tableName() { return 'points' };
  id!: number;
  count!: number;
  TotalPoints?:number
  // get user details or post made by user info
  user_id!: number;
  // list of all orders on present post
  order_id!: number;

  static relationMappings = {
    // relationship with user
    users: {
      modelClass: UsersModel,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'users.id',
        to: 'points.user_id',
      },
    },

    // list out comment on current post
    orders: {
      modelClass: OrdersModel,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'order.id',
        to: 'points.order_id',
      },
    },
  };
}
