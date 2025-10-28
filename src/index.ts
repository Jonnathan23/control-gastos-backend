import { Server } from "./app/presentation/servert";
import { envs } from "./config";
import { PostgreSqlDatabase } from "./data";

(() => {
    main();
})()

async function main() {
    const urlDatabase = envs.IS_LOCAL_DATABASE ? envs.DATABASE_URL_LOCAL : envs.DATABASE_URL;

    await PostgreSqlDatabase.connect({
        urlDatabase: urlDatabase,
        logging: false
    });

    new Server({ port: envs.PORT }).runApp();

}