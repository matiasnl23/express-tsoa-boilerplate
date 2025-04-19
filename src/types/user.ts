import { Optional } from "sequelize";
export interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  disabled: boolean;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, "id"> {}
