import { Sequelize } from "sequelize";
import { config } from "dotenv";

config()
const serviceName = process.env.SERVICE_NAME; 
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

if(!serviceName){
  throw new Error("Missing SERVICE_NAME value")
}

if(!dbUser){
  throw new Error("Missing DB_USER value")
}

const sequelizeInstance = new Sequelize(serviceName, dbUser, dbPassword, {
    host: dbHost,
    port: 1521,
    dialect: 'oracle'
  });
  
export  {sequelizeInstance}