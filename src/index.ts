import config from "./config";
import logger from "./logger";

process.on("uncaughtException", (err) => {
  logger.fatal({ err }, "Uncaught Exception");
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  logger.error({ reason }, "Unhandled Rejection");
});

const greetings = () => {
  logger.info(config);
};

greetings();
