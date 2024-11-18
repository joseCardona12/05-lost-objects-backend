import { container } from "tsyringe";
import { PAuth } from "../ports";
import { Response, Request } from "express";
import { AuthService } from "../services";
import { UtilApplication } from "../utils";
import { ILoginRequest } from "../dtos";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";

configDotenv();
class AuthController {
    
    public async login(req: Request, res: Response):Promise<void>{
        const {email,password} = req.body;
        const utilApplication = UtilApplication.verifyExists(email,password); 
        if(!utilApplication){
            res.status(400).json({
                message: "All fields are required",
                statusCode: 400
            });
            return;
        }
        const authService:PAuth = container.resolve(AuthService);
        const auth = await authService.login({email,password});
        if(!auth){
            res.status(401).json({
                message: "Error with the credentials",
                statusCode: 401
            });
            return;
        };
        if("message" in auth){
            res.status(500).json({
                message: auth.message,
                statusCode:500
            });
            return;
        };
        const tokenGenerated:string = AuthController.generateToken({email,password});
        if(!tokenGenerated){
            res.status(400).json({
                message: "Error generating token",
                statusCode: 400
            });
            return;
        }
        res.header("Authorization", tokenGenerated).status(200).json({
            statusCode: 200,
            message: "Login successful",
            user: auth,
            token: tokenGenerated
        });
    }   

    public async register(req:Request, res:Response):Promise<void>{
        const {name,email,password, birthDate,role_id} = req.body;
        const utilApplication = UtilApplication.verifyExists(name,email,password,birthDate,role_id);
        console.log(name,email,password,birthDate,role_id);
        if(!utilApplication){
            res.status(400).json({
                message: "All fields are required",
                statusCode: 400
            });
            return; 
        }
        const authService:PAuth = container.resolve(AuthService);
        const auth = await authService.register({name,email,password,birthDate,role_id});
        if(!auth){
            res.status(400).json({
                message: "Error registering user",
                statusCode: 400
            });
            return; 
        }
        if("message" in auth){
            res.status(500).json({
                message: auth.message,
                statusCode:500
            });
            return;
        };
        const tokenGenerated:string = AuthController.generateToken({email,password});
        if(!tokenGenerated){
            res.status(400).json({
                message: "Error generating token",
                statusCode: 400
            });
            return;
        }
        res.header("Authorization", tokenGenerated).status(200).json({
            statusCode: 200,
            message: "User registered successfully",
            user: auth,
            token: tokenGenerated
        });
    }

    private static generateToken(user:ILoginRequest):string{
        return jwt.sign(user,process.env.SECRET_KEY as string, {expiresIn: "1h"});
    }
}

export default new AuthController();