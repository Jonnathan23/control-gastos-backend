import { Routes } from "./app/presentation/routes";
import { Server } from "./app/presentation/servert";
import { envs, Databases } from "./config";
import { PostgreSqlDatabase } from "./data";
import { MongoDatabase } from "./data/MongoDb/mongo-database";

(() => {
    main();
})()

async function main() {    

    if (envs.DB_ENGINE === Databases.MONGODB) {
        const urlDatabase = envs.IS_LOCAL_DATABASE ? envs.DATABASE_URL_LOCAL : envs.MONGO_URL;
        await MongoDatabase.connect({
            urlDatabase: urlDatabase!,
            nameDatabase: 'ControlExpenses'
        });
    }

    if (envs.DB_ENGINE === Databases.POSTGRESQL) {
        const urlDatabase = envs.IS_LOCAL_DATABASE ? envs.DATABASE_URL_LOCAL : envs.POSTGRES_URL;
        await PostgreSqlDatabase.connect({
            urlDatabase: urlDatabase!,
            logging: false
        });
    }


    //await MongoDatabase.connect({
    //    urlDatabase: urlDatabase,
    //    nameDatabase: 'ControlExpenses'
    //});


    new Server({ port: envs.PORT, routes: Routes.routes }).runApp();

}