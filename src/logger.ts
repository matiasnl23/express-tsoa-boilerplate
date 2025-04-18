import pino from "pino";
import config from "./config";

const transport =
  config.env === "development"
    ? {
        target: "pino-pretty",
        options: { colorize: true, translateTime: "SYS:standard" },
      }
    : undefined;

const logger = pino(
  {
    level: config.log.level,
  },
  transport ? pino.transport(transport) : undefined
);

export default logger;
