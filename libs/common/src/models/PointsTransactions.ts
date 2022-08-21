import { BaseModel } from './base.model';
// import { CommentModel } from './comment.model';
import { Model } from 'objection';
import { UserModel } from './user.model';
import OrdersModel from './OrdersModel';
import UsersModel from './Users';
import WalletModel from './Wallets';

export class PointsTransactionsModel extends BaseModel {
  static get tableName() { return 'points_transactions' };
  id!: number;
  count!: number; 
  user_id!: number;
  wallit_id!: number;

  static relationMappings = {
    // relationship with user
    users: {
      modelClass: UsersModel,
      relation: Model.BelongsToOneRelation,
      join: {
        from: 'users.id',
        to: 'points_transactions.user_id',
      },
    },

    // list out comment on current post
    wallets: {
        relation: Model.BelongsToOneRelation,
        modelClass:WalletModel,
        join: {
          from: 'wallets.id',
          to: 'points_transactions.wallet_id'
        }
      }
  };
}
