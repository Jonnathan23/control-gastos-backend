import { Sequelize } from "sequelize-typescript";
import colors from 'colors'


interface Options {
    urlDatabase: string;
    logging: boolean;
}

export class PostgreSqlDatabase {

    static async connect(options: Options) {
        const { urlDatabase, logging } = options;

        const db = new Sequelize(urlDatabase, {
            models: [__dirname + "/../**/models/**/*"],
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