import { JwtAdapter } from "../../../../utils/jwt"
import { AuthRepository, CustomError, RegisterUserDto } from "../../../domain"



interface UserToken {
    token: string
    user: {
        us_id: string
        us_email: string
    }
}

interface RegisterUserCase {
    execute(registerUserDto: RegisterUserDto): Promise<UserToken>
}

type generateTokenFunction = typeof JwtAdapter["generateToken"];


export class RegisterUser implements RegisterUserCase {

    constructor(
        private readonly authRepository: AuthRepository,
        private readonly generateToken: generateTokenFunction
    ) { }

    async execute(registerUserDto: RegisterUserDto): Promise<UserToken> {
        const user = await this.authRepository.registerUser(registerUserDto);

        const token = await this.generateToken({ us_id: user.us_id });

        if (!token) throw CustomError.internal('Error al generar el token');

        return {
            token,
            user: {
                us_id: user.us_id,
                us_email: user.us_email
            }
        }
    }

}