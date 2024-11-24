import {  AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import RoleModel from "./roleModel";
import LostPointModel from "./lostPoints";
import StateObjectModel from "./state_objects";
import TypeObjectModel from "./type_objects";

@Table({
    tableName: 'objects',
    timestamps: false
})
export default class ObjectModel extends Model{
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
    url_image!:string;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    description!:string;

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

    @ForeignKey(()=>LostPointModel)
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    lost_point_id!:number;

    @ForeignKey(()=>StateObjectModel)
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    state_object_id!:number;

    @ForeignKey(()=>TypeObjectModel)
    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    type_object_id!:number;
    
}