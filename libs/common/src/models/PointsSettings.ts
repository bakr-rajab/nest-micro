import { BaseModel } from './base.model';
// import { CommentModel } from './comment.model';
import { Model } from 'objection';
import { UserModel } from './user.model';
import OrdersModel from './OrdersModel';
import UsersModel from './Users';

export class PointsSettingsModel extends BaseModel {
  static get tableName() { return 'points_settings' };
  id!: number;
  min_withdrawal!: number;
  point_cost!: number;
  point_price!: number;
}
