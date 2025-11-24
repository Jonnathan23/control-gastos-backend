import { Router } from "express"
import { AuthController } from "./auth.controller"
import { AuthRepositoryImpl } from "../../infrastructure/repositories/auth.repository.impl"
import { AuthDataSourceMongoImpl } from "../../infrastructure/datasources/auth-mongo.datasource.impl"
import { AuthDataSourcePostgresImpl } from "../../infrastructure/datasources/auth-postgres.datasource.impl"
import { Databases, envs } from "../../../config"


export class AuthRoute {

    static get routes(): Router {
        const router = Router()

        const authDataSourceMongo = new AuthDataSourceMongoImpl()
        const authDatasourcePostgres = new AuthDataSourcePostgresImpl()

        const authDatasource = envs.DB_ENGINE === Databases.MONGODB ? authDataSourceMongo : authDatasourcePostgres;
        //const allAuthDatasource = {
        //    mongo: authDataSourceMongo,
        //    postgres: authDatasourcePostgres
        //}
        //const authDatasource = allAuthDatasource[envs.DB_ENGINE] ?? authDataSourceMongo;
        const authRepository = new AuthRepositoryImpl(
            authDatasource
        )

        const authController = new AuthController(authRepository)

        router.post('/register', authController.registerUser)

        return router
    }
}