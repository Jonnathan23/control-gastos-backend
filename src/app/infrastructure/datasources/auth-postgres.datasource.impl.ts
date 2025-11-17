import Users from "../../../data/PostgreSql/models/Users.model";
import { AuthDataSource, handleError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";
import { UserMapper } from "../mappers/user.mapper";


export class AuthDataSourcePostgresImpl implements AuthDataSource {

    constructor() { }

    async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { us_email, us_password } = registerUserDto;

        try {
            const emailExist = await Users.findAll({ where: { us_email } });
            if (emailExist.length) throw new Error('Email ya registrado');

            const user = await Users.create({ us_email, us_password });
            await user.save();

            const userEntity = UserMapper.userEntityFromObject(user);
            return userEntity;
        } catch (error) {
            console.log(error);
            throw handleError(error);
        }
    }

    loginUser(LoginUserDto: LoginUserDto): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
}