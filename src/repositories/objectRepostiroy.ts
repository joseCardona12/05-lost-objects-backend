import { IObject } from "../interfaces";
import { ObjectModel } from "../models";
import { UtilApplication } from "../utils";

export default class ObjectRepository{

    public async getObjects():Promise<IObject[] | null | {message:string}>{
        try{
            return await ObjectModel.findAll();
        }catch(error:unknown){
            return UtilApplication.returnMessage("Get objects", "objectRepository")
        }
    }
}