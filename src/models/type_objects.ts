import {  AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: 'type_objects',
    timestamps: false
})
export default class TypeObjectModel extends Model{
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