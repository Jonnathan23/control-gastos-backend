import { Request, Response } from "express";
import { AuthRepository, CustomError, RegisterUserDto } from "../../domain";
import { RegisterUser } from "../use-cases/auth/register-user.use-case";
import { JwtAdapter } from "../../../utils/jwt";

export class AuthController {

    constructor(
        private readonly authRepository: AuthRepository
        
    ) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message });
        }

        console.log(error);
    }

    registerUser = async (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);

        if (error) return this.handleError(error, res);

        try {

            const registerUser = new RegisterUser(this.authRepository, JwtAdapter.generateToken)
            const { token, user } = await registerUser.execute(registerUserDto!);            

            res.cookie('acces_token', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 2 // 15 minutos, por ejemplo
            })

            return res.status(201).json({ user });
        } catch (error) {
            this.handleError(error, res);

        }
    }
}