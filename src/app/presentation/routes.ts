import { Router } from "express";
import { AuthRoute } from "./auth/route";


export class Routes {

    static get routes(): Router {
        const router = Router()

        router.use('/api/auth', AuthRoute.routes)

        return router
    }
}