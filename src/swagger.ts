import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import * as spec from "../dist/swagger.json";

export function setupSwagger(app: Express) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(spec));
}
