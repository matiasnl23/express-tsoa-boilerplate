import { NextFunction, Request, Response } from "express";
import logger from "../logger";
import { DatabaseError } from "sequelize";
import { ok } from "assert";
import { ValidateError } from "tsoa";

const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ValidateError) {
    logger.error(`Validation error for ${req.path}`, err.fields);
  } else if (err instanceof DatabaseError) {
    logger.error(`Database error: ${err.message} running ${err.sql}`, {
      parameters: err.parameters,
      stack: err.stack,
    });
  } else {
    logger.error({ err }, "Error occurred");
  }

  res.status(500).json({
    ok: false,
  });
};

export default errorHandlerMiddleware;
