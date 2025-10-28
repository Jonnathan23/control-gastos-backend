import colors from 'colors'
import mongoose from 'mongoose'

interface Options {
    urlDatabase: string
    nameDatabase?: string
}

export class MongoDatabase {

    static async connect(options: Options) {
        const { urlDatabase, nameDatabase = 'control_expenses_db' } = options;

        try {
            const { connection } = await mongoose.connect(urlDatabase, { dbName: nameDatabase });
            const url = `${connection.host}:${connection.port}`
            console.log(colors.blue.bold(`MongoDB connected successfully: ${url}`));

        } catch (error) {

        }
    }
}