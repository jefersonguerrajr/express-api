import { INTEGER, STRING } from "sequelize";
import {sequelizeInstance} from "../db";

const User = sequelizeInstance.define("USUARIO", {
  id: {
    type: INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
});

export {User}
