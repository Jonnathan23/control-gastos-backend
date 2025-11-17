import { Validators } from "../../../../utils/validators.utils";


export class LoginUserDto {

    private constructor(
        public us_email: string,
        public us_password: string
    ) { }

    static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
        const { us_email, us_password } = object

        if (!us_email || !us_password) return ["Datos inválidos"];

        if (!Validators.email.test(us_email)) return ["Email inválido"];

        
        return ["", new LoginUserDto(us_email, us_password)];
    }
}