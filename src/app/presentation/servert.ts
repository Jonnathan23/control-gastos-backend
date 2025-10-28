import express, { Router } from "express"
import colors from 'colors'

interface Options {
    port?: number
    routes?: Router

}


export class Server {
    public readonly app = express()
    private readonly port: number;
    // private readonly routes: Router;

    constructor(options: Options) {
        const { port = 3000, routes } = options
        this.port = port
        //this.routes = routes
    }

    async runApp() {
        //Middlewares
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))

        // this.app.use(this.routes)

        //Start server
        this.app.listen(this.port, () => {
            console.log(colors.blue.bold(`Server listening on port ${this.port}`));
        })
    }

}