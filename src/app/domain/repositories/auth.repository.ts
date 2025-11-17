import { RegisterUserDto } from "../dtos/auth/register-user.dto";
import { UserEntity } from "../entities/users.entity";
import { LoginUserDto } from "../dtos/auth/login-user.dto";

export abstract class AuthRepository {

    abstract registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity>;

    abstract loginUser(LoginUserDto: LoginUserDto): Promise<UserEntity>;

}