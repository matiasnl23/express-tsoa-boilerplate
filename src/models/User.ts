import {
  Column,
  DataType,
  DefaultScope,
  Model,
  Table,
} from "sequelize-typescript";
import { UserAttributes, UserCreationAttributes } from "../types/user";

@DefaultScope(() => ({
  attributes: { exclude: ["password"] },
  where: {
    deletedAt: null,
  },
}))
@Table({ tableName: "users", timestamps: true, paranoid: true })
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  id: string = "";

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  disabled!: boolean;
}
