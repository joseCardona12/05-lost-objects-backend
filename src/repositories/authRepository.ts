import { injectable } from "tsyringe";
import { ILoginRequest, IUserRequest, IUserResponse } from "../dtos";
import { UserModel } from "../models";
import { PAuth } from "../ports";
import { UtilApplication } from "../utils";


@injectable()
export default class AuthRepository implements PAuth {
    public async login(user: ILoginRequest):Promise<IUserResponse | {message:string} | null>{
        try {
            const {email,password} = user;
            return await UserModel.findOne({where:{email,password}});
        }catch(error:unknown){
            return UtilApplication.returnMessage("login", "AuthRepository");
        }
    }
    public async register(user: IUserRequest): Promise<IUserResponse | { message: string; } | null> {
        try{
            const {name,email,password,birthDate,role_id} = user;
            return await UserModel.create({name,email,password,birthDate,role_id});
        }catch(error:unknown){
            return UtilApplication.returnMessage("register", "AuthRepository");
        }
    }

    public async foundEmail(email:string):Promise<IUserResponse | {message:string} | null>{
        try{
            return await UserModel.findOne({where: {
                email
            }})

        }catch(error:unknown){
            return UtilApplication.returnMessage("foundEmail", "AuthRepository")
        }
    }
}