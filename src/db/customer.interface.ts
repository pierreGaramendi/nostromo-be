import { Type } from "class-transformer";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, ValidateNested, isNotEmpty } from "class-validator";

export class ICustomerAddress {
    @IsNotEmpty({ message: 'No se proporciono el pais' })
    @IsString({ message: 'El pais proporcionado no es un texto' })
    country: string;

    @IsNotEmpty({ message: 'No se proporciono la calle' })
    @IsString({ message: 'La calle proporcionada no es un texto' })
    street1: string;

    @IsOptional()
    @IsString({ message: 'La calle 2 proporcionada no es un texto' })
    street2: string;

    @IsNotEmpty({ message: 'No se proporciono la ciudad' })
    @IsString({ message: 'La ciudad proporcionada no es un texto' })
    city: string;

    @IsNotEmpty({ message: 'No se proporciono el estado' })
    @IsString({ message: 'El estado proporcionado no es un texto' })
    state: string;

    @IsNotEmpty({ message: 'No se proporciono el codigo zip' })
    @IsString({ message: 'El codigo zip proporcionado no es un texto' })
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

    @ValidateNested({ each: true })
    @Type(() => ICustomerAddress)
    address: ICustomerAddress[];

    @IsString()
    @MinLength(9, {
        message: 'Title is too short. Minimal length is $constraint1 characters, but actual is $value',
    })
    @MaxLength(9, {
        message: 'Title is too long. Maximal length is $constraint1 characters, but actual is $value',
    })
    phoneNumber: string;
}

