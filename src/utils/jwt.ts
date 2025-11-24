import jwt, { SignOptions } from "jsonwebtoken";

import { envs } from "../config";


const JWT_SEED = envs.JWT_SECRET;


export class JwtAdapter {
    static async generateToken(payload: Object, duration: SignOptions['expiresIn']): Promise<string | null> {
        return new Promise((resolve) => {
            jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {
                console.log(err);
                if (err) return resolve(null);

                console.log(token);
                resolve(token!);
            })
        })
    }

    static async validateToken<T>(token: string): Promise<T | null> {
        return new Promise((resolve) => {
            jwt.verify(token, JWT_SEED, (err, decoded) => {
                if (err) return resolve(null);
                
                resolve(decoded! as T);
            })
        })
    }
}