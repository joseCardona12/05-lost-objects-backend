import { Sequelize } from "sequelize-typescript";
import { configDotenv } from "dotenv";
import { LostPointModel, ObjectModel, RoleModel, StateObjectModel, TypeObjectModel, UserModel } from "../models";

configDotenv();
const sequelize:Sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [UserModel,RoleModel,ObjectModel,StateObjectModel,TypeObjectModel, LostPointModel]
});

export default sequelize;