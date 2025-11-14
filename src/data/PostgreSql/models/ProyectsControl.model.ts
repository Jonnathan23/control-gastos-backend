import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import Revenues_Sesions from "./revenues/RevenuesSesions.model";
import Users from "./Users.model";
import ExpensesSesions from "./expenses/ExpensesSesions.model";


export interface ProyectsControlI extends Model {
    pro_id: string;
    pro_name: string;
}

@Table({
    tableName: 'Proyects_Control',
    timestamps: true,
    createdAt: 'pro_createdAt',
    updatedAt: 'pro_createdAt'
})

class ProyectsControl extends Model {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    declare pro_id: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare pro_name: string;

    //* |------| | FK | |------|
    @ForeignKey(() => Users)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare pro_us_id: Users["us_id"];


    //* |------| | HasMany | |------|
    @HasMany(() => Revenues_Sesions)
    declare revenues_Sesions:Revenues_Sesions[];


    @HasMany(() =>  ExpensesSesions)
    declare  revenues_sesions:  ExpensesSesions[];
}

export default ProyectsControl;