import { Module, Global } from '@nestjs/common';
import { map } from 'lodash';
import Knex from 'knex'
import { Model } from 'objection'

import * as knexConfig from './knex';
const providers = [
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knex = await Knex(knexConfig);
      Model.knex(knex);
      return knex;
    },
  },
];

@Global()
@Module({
  providers,
  exports: [...providers],
})
export class DatabaseModule {}
