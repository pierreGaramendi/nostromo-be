import { IsBoolean, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, isNotEmpty } from "class-validator";

export class ICustomerAddress {
    @IsString()
    country: string;

    @IsString()
    street1: string;

    @IsString()
    street2: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsString()
    zip: string;
}

export class ICustomer {
    @IsNotEmpty({ message: 'No se proporciono el nombre' })
    @IsString({ message: 'El nombre proporcionado no es un texto' })
    fname: string;

    @IsNotEmpty({ message: 'No se proporciono el apellido' })
    @IsString({ message: 'El apellido proporcionado no es un texto' })
    lname: string;

    @IsNotEmpty({ message: 'No se proporciono el email' })
    @IsEmail({},{message:'El valor proporcionado no es un email valido'})
    email: string;

    @IsNotEmpty()
    hashedAndSaltedPassword: string;

    @IsBoolean()
    emailVerified: boolean;

    address: Array<ICustomerAddress>;

    @IsString()
    @MinLength(9, {
        message: 'Title is too short. Minimal length is $constraint1 characters, but actual is $value',
    })
    @MaxLength(9, {
        message: 'Title is too long. Maximal length is $constraint1 characters, but actual is $value',
    })
    phoneNumber: string;
}

