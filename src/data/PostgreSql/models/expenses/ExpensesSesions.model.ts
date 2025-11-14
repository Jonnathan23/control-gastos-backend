import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import ProyectsControl from "../ProyectsControl.model";
import Expenses from "./Expenses.model";


export interface ExpensesSesionsI extends Model {
    ex_ses_id: string;
    ex_ses_name: string;
}

@Table({
    tableName: 'Proyecs_Control',
    timestamps: true,
    createdAt: 'pro_createdAt',
    updatedAt: 'pro_createdAt'
})
class ExpensesSesions extends Model {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    declare ex_ses_id: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare ex_ses_name: string;

    //* |------| | FK | |------|
    @ForeignKey(() => ProyectsControl)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare pro_us_id: ProyectsControl["pro_id"];

    //* |------| | HasMany | |------|
    //TODO
    @HasMany(() => Expenses)
    declare expenses: Expenses[];

}


export default ExpensesSesions;