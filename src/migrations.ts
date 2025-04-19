import "ts-node/register";
import { SequelizeStorage, Umzug } from "umzug";
import { Dialect, Sequelize } from "sequelize";
import config from "./config";
import logger from "./logger";

const dialectOptions: any = {};
if (config.db.ssl) {
  dialectOptions.ssl = {
    require: true,
  };
}

const sequelize = new Sequelize({
  host: config.db.host,
  port: config.db.port,
  username: config.db.user,
  password: config.db.pass,
  database: config.db.database,
  dialect: config.db.dialect as Dialect,
  dialectOptions,
  // logging: (msg) => logger.debug(msg),
});

const umzug = new Umzug({
  migrations: {
    glob: "src/migrations/*.ts",
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger,
});

export type Migration = typeof umzug._types.migration;

if (require.main === module) {
  umzug.runAsCLI();
}

export { umzug };
