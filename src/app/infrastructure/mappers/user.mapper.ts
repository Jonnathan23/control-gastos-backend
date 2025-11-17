import { CustomError, UserEntity } from "../../domain";


export class UserMapper {
    static userEntityFromObject(object: { [key: string]: any }): UserEntity {
        const { id, _id, us_id, us_email, us_password } = object;

        if (!id && !_id && !us_id) throw new Error('Missing id field');

        if (!us_email || !us_password) throw CustomError.badRequest('Missing email or password field');


        return new UserEntity(
            us_id || id || _id,
            us_email,
            us_password
        );

    }
}