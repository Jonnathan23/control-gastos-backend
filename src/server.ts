import express from 'express'
import colors from 'colors'

import db from './config/db'

const server = express()

export const connectDB = async () => {
    try {
        await db.authenticate()
        db.sync();
        console.log(colors.blue.bold('Database connected successfully'));
    } catch (error) {
        console.log(colors.red.bold('Unable to connect to the database:'));
        console.log(error);
    }
}

connectDB();


export default server