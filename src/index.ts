import express, { json, urlencoded } from "express";
import config from "./config";
import { sequelize } from "./db";
import logger from "./logger";
import { RegisterRoutes } from "./routes";
import { setupSwagger } from "./swagger";

process.on("uncaughtException", (err) => {
  logger.fatal({ err }, "Uncaught Exception");
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  logger.error({ reason }, "Unhandled Rejection");
});

const main = async () => {
  await sequelize.authenticate();
  logger.info("Database connection has been established successfully.");

  const app = express();
  app.use(urlencoded({ extended: true }));
  app.use(json());

  RegisterRoutes(app);
  setupSwagger(app);

  app.listen(config.port, () => {
    logger.info(`Server is running on port ${config.port}`);
  });
};

main();
