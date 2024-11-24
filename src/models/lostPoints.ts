import {  AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import RoleModel from "./roleModel";

@Table({
    tableName: 'lost_points',
    timestamps: false
})
export default class LostPointModel extends Model{
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

}