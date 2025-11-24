import { get } from 'env-var';

process.loadEnvFile();

const mongoUrl = get('DATABASE_URL_MONGO').asString();
const postgresUrl = get('DATABASE_URL_POSTGRES').asString();

// Validación condicional
if (!mongoUrl && !postgresUrl) {
    throw new Error('Debes definir DATABASE_URL_MONGO o DATABASE_URL_POSTGRES');
}

export const envs = {
    PORT: get('PORT').required().asPortNumber(),

    DB_ENGINE: get('DB_ENGINE').required().asString(),
    MONGO_URL: mongoUrl,
    POSTGRES_URL: postgresUrl,
    DATABASE_URL_LOCAL: get('DATABASE_URL_LOCAL').required().asString(),

    JWT_SECRET: get('JWT_SECRET').required().asString(),

    DEVELOPMENT: process.argv[2] ?? '',
    IS_LOCAL_DATABASE: process.argv[3] ?? '',

    //TODO: FRONTEND_URL: get('FRONTEND_URL').required().asString(),    

}

export const Databases = {
    POSTGRESQL: 'postgres',
    MONGODB: 'mongodb'
}