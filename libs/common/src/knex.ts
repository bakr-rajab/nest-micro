// import * as Dotenv from 'dotenv';
import * as path from 'path';
// Dotenv.config({ path: '../../.env' });

import { knexSnakeCaseMappers } from 'objection';
import { Logger } from '@nestjs/common';


module.exports = {
  development: {
    client: 'mysql2',
    connection: "mysql://fastmicroservice_v1:f9rOqrj)wf0h@162.0.210.160:3306/fastmicroservice_v1",
    acquireConnectionTimeout: 60000
  },
  staging: {
    client: 'mysql2',
    connection: {
      database: process.env.MYSQL_DB,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
    ...knexSnakeCaseMappers(),
  },
  production: {
    client: 'mysql2',
    connection: {
      database: process.env.MYSQL_DB,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
    ...knexSnakeCaseMappers(),
  },
}[process.env.NODE_ENV || 'development'];

Logger.log(
  `Will connect to mysql://${process.env.MYSQL_HOST}@${process.env.MYSQL_USER}/${process.env.MYSQL_DB}`,
);
