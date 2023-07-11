import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail } from "class-validator";
import { Document, Types } from "mongoose";

@Schema()
export class CustomerAdress extends Document {
    @Prop({ trim: true })
    country: string;

    @Prop({ trim: true })
    street1: string;

    @Prop({ trim: true })
    street2: string;

    @Prop({ trim: true })
    city: string;

    @Prop({ trim: true })
    state: string;

    @Prop({ trim: true })
    zip: string;
}
export const customerAdressSchema = SchemaFactory.createForClass(CustomerAdress)

@Schema({ timestamps: true })
export class Customer extends Document {
    @Prop({ trim: true, required: true })
    fname: string;

    @Prop({ trim: true })
    lname: string;

    @Prop({
        trim: true,
        unique: true,
        required: true,
        index: true
    })
    @IsEmail()
    email: string;

    @Prop({ trim: true })
    hashedAndSaltedPassword: string;

    @Prop()
    emailVerified: false;

    @Prop({ type: [customerAdressSchema] })
    address: Types.Array<CustomerAdress>;

    @Prop({ maxlength: 9 })
    phoneNumber: string
}

export const customerSchema = SchemaFactory.createForClass(Customer)