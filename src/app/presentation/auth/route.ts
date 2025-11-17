import { Router } from "express"
import { AuthController } from "./auth.controller"
import { AuthRepositoryImpl } from "../../infrastructure/repositories/auth.repository.impl"
import { AuthDataSourceImpl } from "../../infrastructure/datasources/auth-mongo.datasource.impl"


export class AuthRoute {

    static get routes(): Router {
        const router = Router()

        const authDataSource = new AuthDataSourceImpl()

        const authRepository = new AuthRepositoryImpl(authDataSource)

        const authController = new AuthController(authRepository)

        router.post('/register', authController.registerUser)

        return router
    }
}