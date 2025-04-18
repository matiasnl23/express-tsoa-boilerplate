import { Sequelize } from "sequelize-typescript";
import config from "./config";
import path from "path";
import logger from "./logger";
import { Dialect } from "sequelize";

const dialectOptions: any = {};

if (config.db.ssl) {
  dialectOptions.ssl = {
    require: true,
  };
}

export const sequelize = new Sequelize({
  host: config.db.host,
  port: config.db.port,
  username: config.db.user,
  password: config.db.pass,
  database: config.db.database,
  ssl: config.db.ssl,
  dialect: config.db.dialect as Dialect,
  dialectOptions,
  models: [path.join(__dirname, "/models")],
  logging: (msg) => logger.debug(msg),
});
