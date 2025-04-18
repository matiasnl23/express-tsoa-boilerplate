import convict from "convict";
import dotenv from "dotenv";

dotenv.config();

const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development"],
    default: "development",
    env: "NODE_ENV",
  },
  port: {
    doc: "The port to bind the application.",
    format: "port",
    default: 3000,
    env: "PORT",
  },
  db: {
    host: {
      doc: "Database host",
      format: String,
      default: "localhost",
      env: "DB_HOST",
    },
    user: {
      doc: "Database user",
      format: String,
      default: "root",
      env: "DB_USER",
    },
    pass: {
      doc: "Database password",
      format: String,
      default: "pass",
      env: "DB_PASS",
    },
    port: {
      doc: "Database port",
      format: "port",
      default: 3306,
      env: "DB_PORT",
    },
    database: {
      doc: "Database name",
      format: String,
      default: "default",
      env: "DB_NAME",
    },
    dialect: {
      doc: "Database dialect",
      format: ["mysql", "postgres", "sqlite"],
      default: "postgres",
      env: "DB_DIALECT",
    },
    ssl: {
      doc: "Use SSL for database connection",
      format: Boolean,
      default: false,
      env: "DB_SSL",
    },
  },
  log: {
    enabled: {
      doc: "Enable debug mode",
      format: Boolean,
      default: false,
      env: "DEBUG_ENABLED",
    },
    level: {
      doc: "Debug level",
      format: ["fatal", "error", "warn", "info", "debug", "trace"],
      default: "info",
      env: "DEBUG_LEVEL",
    },
  },
});

const env = config.get("env");
config.loadFile(["./config/default.json", `./config/${env}.json`]);

config.validate({ allowed: "strict" });

export default config.getProperties();
