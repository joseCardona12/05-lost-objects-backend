import { ILoginRequest, ILoginResponseError, ILoginResponseSuccess, IUserRequest, IUserResponse } from "../dtos";

export interface PAuth{
    /**
     * login user 
     * @method
     * @param user This is an object that containt all propreties for login to user
     * @returns 
     */
    login(user: ILoginRequest):Promise<IUserResponse | {message:string} | null>

    /**
     * 
     * @param user This is an object that containt all propierties for register to user
     *  
     */
    register(user:IUserRequest):Promise<IUserResponse | {message:string} | null>
}