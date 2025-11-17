import { Sequelize } from "sequelize-typescript";
import colors from 'colors'
import path from 'path';

interface Options {
    urlDatabase: string;
    logging: boolean;
}

export class PostgreSqlDatabase {

    static async connect(options: Options) {
        const { urlDatabase, logging } = options;

        const db = new Sequelize(urlDatabase, {
            models: [path.resolve(__dirname, 'models/**/*.model.{ts,js}')],
            logging: logging ? console.log : false,
        });

        try {
            await db.authenticate();
            db.sync();
            console.log(colors.blue.bold('Database connected successfully'));
        } catch (error) {
            console.log(colors.red.bold('Unable to connect to the database:'));
            console.log(error);
        }

    }
}