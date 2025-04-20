import "ts-node/register";
import { SequelizeStorage, Umzug } from "umzug";
import { sequelize } from "./db";
import logger from "./logger";
import path from "path";

const isTs = path.extname(__filename) === ".ts";
const migrationsPath = isTs
  ? path.join(__dirname, "migrations", "*.ts")
  : path.join(__dirname, "migrations", "*.js");

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
