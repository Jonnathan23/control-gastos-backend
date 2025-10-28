import { get } from 'env-var';

process.loadEnvFile();


export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    DATABASE_URL: get('DATABASE_URL').required().asString(),
    DATABASE_URL_LOCAL: get('DATABASE_URL_LOCAL').required().asString(),

    DEVELOPMENT: process.argv[2] ?? '',
    IS_LOCAL_DATABASE: process.argv[3] ?? '',

    //TODO: FRONTEND_URL: get('FRONTEND_URL').required().asString(),    

}