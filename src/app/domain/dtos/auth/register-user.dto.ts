import { Validators } from "../../../../utils/validators.utils";


export class RegisterUserDto {
    private constructor(
        public us_email: string,
        public us_password: string,
        public us_confirm_password: string
    ) { }

    static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
        const { us_email, us_password, us_confirm_password } = object

        if (!us_email || !us_password) return ["Datos inválidos"];

        if (!Validators.email.test(us_email)) return ["Email inválido"];

        if (us_password.length < 6) return ["La contraseña no puede tener menos de 6 caracteres"];

        if (us_password !== us_confirm_password) return ["Las contraseñas no coinciden"];


        return ["", new RegisterUserDto(us_email, us_password, us_confirm_password)];
    }
}