import { Sequelize } from "sequelize-typescript";


process.loadEnvFile();

const url = process.env.DATABASE_URL || process.env.DATABASE_URL_LOCAL;

const db = new Sequelize(url!, {
    models: [__dirname + "/../**/models/**/*"],
    logging: false,
})


export default db;