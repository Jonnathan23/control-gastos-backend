import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import Expenses from "./Expenses.model";


export interface CategoriesI extends Model {
    cat_id: string;
    cat_name: string;
    cat_icon: string;
}

@Table({
    tableName: 'Categories',
    timestamps: true,
    createdAt: 'cat_createdAt',
    updatedAt: 'cat_createdAt'
})

class Categories extends Model {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    declare cat_id: string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare cat_name: string;
    

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare cat_icon: string;

    
    @HasMany(() => Expenses)
    declare expenses: Expenses[];

}


export default Categories