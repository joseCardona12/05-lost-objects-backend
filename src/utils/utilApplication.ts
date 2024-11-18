
import { Express } from "express";
import { configDotenv } from "dotenv";

configDotenv();
export default class UtilApplication{
    public static getPort(): number {
        const port = parseInt(process.env.PORT as string) || 5000;
        return port;
    }

    public static async initServer(app: Express):Promise<void>{
        const port = UtilApplication.getPort();
        app.listen(port, () => console.log(`Server running on port ${port}`));
    }
}
