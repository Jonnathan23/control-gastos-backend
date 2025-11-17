import { AuthDataSource, AuthRepository, UserEntity } from "../../domain";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";


export class AuthRepositoryImpl implements AuthRepository {

    constructor(
        private readonly authDataSource: AuthDataSource
    ) { }

    registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.authDataSource.registerUser(registerUserDto);
    }


    loginUser(LoginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.authDataSource.loginUser(LoginUserDto);
    }

}