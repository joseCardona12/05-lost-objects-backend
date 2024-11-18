import { inject, injectable } from "tsyringe";
import { ILoginRequest, IUserRequest, IUserResponse } from "../dtos";
import { PAuth } from "../ports";
import { AuthRepository } from "../repositories";


@injectable()
export default class AuthService implements PAuth{
    constructor(@inject(AuthRepository) private authRepository:AuthRepository){}
    public async login(user: ILoginRequest):Promise<IUserResponse | {message:string} | null> {
        const data = await this.authRepository.login(user);
        return data;
    }

    public async register(user: IUserRequest): Promise<IUserResponse | { message: string; } | null> {
        const data = await this.authRepository.register(user);
        return data;
    }
}