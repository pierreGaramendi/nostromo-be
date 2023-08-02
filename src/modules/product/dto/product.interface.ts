import { Type } from "class-transformer";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, ValidateNested,IsNumber } from "class-validator";

export class IDiscount {
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

export class IProduct {

    @IsNotEmpty({ message: 'No se proporciono el nombre del producto' })
    @IsString({ message: 'El nombre del producto proporcionado no es un texto' })
    title: string;

    @IsNotEmpty({ message: 'No se proporciono el vendedor' })
    sellerId: string;

    @IsString({ message: 'El descripcion del producto proporcionado no es un texto' })
    description: string;

    @IsOptional()
    skus: string[];

    @IsOptional()
    categories: string[];

    @IsNumber()
    price: number;

    @IsNumber()
    quantity: number;

    @IsNotEmpty({ message: 'No se proporciono ninguna imagen' })
    images: string[];

    @IsNotEmpty({ message: 'No se proporciono el estado del producto' })
    condition: string;

    @IsNotEmpty({ message: 'No se proporciono la marca del producto' })
    brand: string;

    @IsOptional()
    PUC: string;

    @IsNotEmpty({ message: 'No proporciono el tipo de garantia' })
    warranty: string;

    @IsNotEmpty({ message: 'No se selecciono si se puede recoger el producto en persona' })
    pickUpInPerson: boolean

    @Type(() => IDiscount)
    discount: IDiscount;

    @IsNotEmpty({ message: 'No proporciono la imagen de portada' })
    thumbnail: string

    @IsNotEmpty({ message: 'No se proporiciono el rating' })
    rating: {
        avg: { type: Number },
        total: { type: Number }
    }
}


export class IProductUpdate {
    @IsOptional()
    @IsNotEmpty({ message: 'No se proporciono el nombre' })
    @IsString({ message: 'El nombre proporcionado no es un texto' })
    fname: string;

    @IsOptional()
    @IsNotEmpty({ message: 'No se proporciono el apellido' })
    @IsString({ message: 'El apellido proporcionado no es un texto' })
    lname: string;

    @IsOptional()
    @IsNotEmpty({ message: 'No se proporciono el email' })
    @IsEmail({}, { message: 'El valor proporcionado no es un email valido' })
    email: string;

    @IsOptional()
    @IsNotEmpty()
    hashedAndSaltedPassword: string;

    @IsOptional()
    @IsBoolean()
    emailVerified: boolean;

    @IsOptional()
    @IsString()
    @MinLength(9, { message: 'El numero es demasiado corto. El minimo es $constraint1 numeros, pero se recibio $value' })
    @MaxLength(9, { message: 'El numero es demasiado largo. El maximo es $constraint1 numeros, pero se recibio $value' })
    phoneNumber: string;

    @IsNotEmpty({ message: 'No proporciono la imagen de portada' })
    thumbnail: string

    @IsNotEmpty({ message: 'No se proporiciono el rating' })
    rating: {
        avg: { type: Number },
        total: { type: Number }
    }
}


