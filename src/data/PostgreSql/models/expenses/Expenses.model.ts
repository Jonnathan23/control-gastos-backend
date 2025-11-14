import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import Categories from "./Categories.model";
import ExpensesSesions from "./ExpensesSesions.model";


export interface ExpensesI extends Model {
    ex_id: string;
    ex_name: string;
    ex_quentity: number;
    exp_ex_ses_id: string;
}

@Table({
    tableName: 'Expenses',
    timestamps: true,
    createdAt: 'ex_createdAt',
    updatedAt: 'ex_createdAt'
})

class Expenses extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    declare ex_id: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare ex_name: string;


    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    declare ex_quentity: number;

    //* |------| | FK | |------|
    @ForeignKey(() => Categories)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare ex_cat_id: Categories["cat_id"];

    @ForeignKey(() => ExpensesSesions)
    @Column({
        type: DataType.UUID,
        allowNull: false
    })
    declare exp_ex_ses_id: ExpensesSesions["ex_ses_id"];

}

export default Expenses;