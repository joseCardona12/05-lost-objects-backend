
import { Express } from "express";
import { configDotenv } from "dotenv";
import sequelize from "../config/db";

configDotenv();
export default class UtilApplication{
    public static getPort(): number {
        const port = parseInt(process.env.PORT as string) || 5000;
        return port;
    }

    public static async initServer(app: Express):Promise<void>{
        const port = UtilApplication.getPort();
        await sequelize.authenticate();
        console.log({message: "Trying connect with the database..."});
        await sequelize.sync();
        console.log({message: "Database connected successfully"});
        app.listen(port, () => console.log(`Server running on port ${port}`));
    }

    public static verifyExists(...params: (string | number)[]):boolean {
        return params.every(params =>params)
    }

    public static returnMessage(nameMethod:string, nameModule:string):{message:string}{
        return ({
            message: `Error with the method ${nameMethod} in the ${nameModule}`
        })
    }
}
