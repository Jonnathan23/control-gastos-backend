import { LoginUserDto } from "../dtos/auth/login-user.dto";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { UserEntity } from "../entities/users.entity";


export abstract class AuthDataSource {

    abstract registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity>;

    abstract loginUser(LoginUserDto: LoginUserDto): Promise<UserEntity>;

}