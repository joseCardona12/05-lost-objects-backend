import { Sequelize } from "sequelize-typescript";
import { configDotenv } from "dotenv";

configDotenv();
const sequelize:Sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

export default sequelize;