import type { Migration } from "../migrations";
import { DataTypes } from "sequelize";
import { User } from "../models/User";

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.createTable("users", {
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
      type: DataTypes.DATE,
      defaultValue: queryInterface.sequelize.fn("NOW"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: queryInterface.sequelize.fn("NOW"),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  await User.create({
    firstName: "Admin",
    lastName: "User",
    email: "admin@store.com",
    password: "1234",
  });
};

export const down: Migration = async ({ context: queryInterface }) => {
  queryInterface.dropTable("users");
};
