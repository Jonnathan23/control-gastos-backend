import { Routes } from "./app/presentation/routes";
import { Server } from "./app/presentation/servert";
import { envs } from "./config";
import { PostgreSqlDatabase } from "./data";
import { MongoDatabase } from "./data/MongoDb/mongo-database";

(() => {
    main();
})()

async function main() {
    const urlDatabase = envs.IS_LOCAL_DATABASE ? envs.DATABASE_URL_LOCAL : envs.DATABASE_URL;


    await PostgreSqlDatabase.connect({
        urlDatabase: urlDatabase,
        logging: false
    });

/*
    await MongoDatabase.connect({
        urlDatabase: urlDatabase,
        nameDatabase: 'ControlExpenses'
    });
*/

    new Server({ port: envs.PORT, routes: Routes.routes }).runApp();

}