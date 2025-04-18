import path from "path";
import swaggerJSDoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
    },
    servers: [
      {
        url: "/api",
        description: "API server",
      },
    ],
  },
  apis: [
    path.join(__dirname, "routes/*.ts"), // Path to the API docs
    path.join(__dirname, "models/*.ts"), // Path to the models
  ],
};

const spec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));
}
