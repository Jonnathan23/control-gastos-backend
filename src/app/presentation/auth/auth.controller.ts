import { Request, Response } from "express";
import { AuthRepository, CustomError, RegisterUserDto } from "../../domain";

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
            const user = await this.authRepository.registerUser(registerUserDto!);

            return res.status(201).json(user);
        } catch (error) {
            this.handleError(error, res);

        }
    }
}