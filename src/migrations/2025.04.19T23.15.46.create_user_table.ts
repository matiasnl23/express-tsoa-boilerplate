import type { Migration } from "../migrations";
import { DataTypes } from "sequelize";

export const up: Migration = async ({ context: queryInterface }) => {
  queryInterface.createTable("users", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.TIME,
      defaultValue: queryInterface.sequelize.fn("NOW"),
    },
    updatedAt: {
      type: DataTypes.TIME,
      defaultValue: queryInterface.sequelize.fn("NOW"),
    },
    deletedAt: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  });
};

export const down: Migration = async ({ context: queryInterface }) => {
  queryInterface.dropTable("users");
};
