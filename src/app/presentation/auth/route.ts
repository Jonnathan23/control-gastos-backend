import { Router } from "express"
import { AuthController } from "./auth.controller"
import { AuthRepositoryImpl } from "../../infrastructure/repositories/auth.repository.impl"
import { AuthDataSourceMongoImpl } from "../../infrastructure/datasources/auth-mongo.datasource.impl"
import { AuthDataSourcePostgresImpl } from "../../infrastructure/datasources/auth-postgres.datasource.impl"


export class AuthRoute {

    static get routes(): Router {
        const router = Router()

        const authDataSourceMongo = new AuthDataSourceMongoImpl()
        const authDatasourcePostgres = new AuthDataSourcePostgresImpl()

        const authRepository = new AuthRepositoryImpl(
            //    authDataSourceMongo
            authDatasourcePostgres
        )

        const authController = new AuthController(authRepository)

        router.post('/register', authController.registerUser)

        return router
    }
}