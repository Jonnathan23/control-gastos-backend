import { HasMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import ProyectsControl from "./ProyectsControl.model";

export interface UsersI extends Model {
    us_id: string;
    us_email: string;
    us_password: string;

}

@Table({
    tableName: 'Users',
    timestamps: true,
    createdAt: 'us_createdAt',
    updatedAt: 'us_createdAt'
})

class Users extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    declare us_id:string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare email:string;


    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare password:string;
    

    //* |------| | HasMany | |------|
    @HasMany(() => ProyectsControl)
    declare proyects_Control: ProyectsControl[];
    
}


export default Users;