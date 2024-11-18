
export interface ILoginResponseSuccess {
    statusCode:number,
    message:string,
    user: ILoginResponseSuccessUser
}

export interface ILoginResponseSuccessUser {
    name:string,
    email:string,
    role_id:number,
    token:string
}

export interface ILoginResponseError{
    message:string,
    statusCode:number,
}