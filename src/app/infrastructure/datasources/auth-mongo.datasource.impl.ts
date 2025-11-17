import { Users } from "../../../data/MongoDb/models/Users.model";
import { AuthDataSource, CustomError, handleError, UserEntity } from "../../domain";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { UserMapper } from "../mappers/user.mapper";


export class AuthDataSourceImpl implements AuthDataSource {

    constructor(

    ) { }

    async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { us_email, us_password } = registerUserDto;

        try {
            const emailExist = await Users.findOne({ us_email });
            if (emailExist) throw new Error('Email ya registrado');

            const user = await Users.create({ us_email, us_password });
            user.save();

            const userEntity = UserMapper.userEntityFromObject(user);
            return userEntity;

        } catch (error) {
            throw handleError(error);
        }
    }


    loginUser(LoginUserDto: LoginUserDto): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

}