import {  AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import RoleModel from "./roleModel";

@Table({
    tableName: 'users',
    timestamps: false
})
export default class UserModel extends Model{
    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    name!:string;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    email!:string;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    password!:string;

    @Column({
        type: DataType.DATE,
        allowNull:false
    })
    birthDate!:string;

    @ForeignKey(()=>RoleModel)
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    role_id!:number;
}