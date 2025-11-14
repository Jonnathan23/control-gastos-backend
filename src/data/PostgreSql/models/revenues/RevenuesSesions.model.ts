import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import ProyectsControl from "../ProyectsControl.model";


export interface Revenues_SesionsI extends Model {
    rev_ses_id: string;
    rev_ses_creared_at: string
    rev_ses_total_quantity: number
}

@Table({
    tableName: 'Revenues_Sesions',
    timestamps: true,
    createdAt: 'rev_createdAt',
    updatedAt: 'rev_createdAt'
})
class Revenues_Sesions extends Model {

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    declare rev_ses_id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    declare rev_ses_creared_at: string


    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        allowNull: false
    })
    declare rev_ses_total_quantity: number


    //* |------| | FK | |------|
    @ForeignKey(() => ProyectsControl)
    @Column({
        type: DataType.UUID,
        allowNull: false    
    })
    declare rev_pro_id: ProyectsControl["pro_id"];

    
    //* |------| | HasMany | |------|
    //TODO:
    //@HasMany(() => Revenues)
    //declare expenses_sesions: ProyectsControl[];

}


export default Revenues_Sesions;