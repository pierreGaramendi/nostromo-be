import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail } from "class-validator";
import { Document, Types } from "mongoose";
import { SearchHistory, searchHistorySchema } from "./search-history.schema";

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
    username: string;

    @Prop({ trim: true, required: true })
    fname: string;

    @Prop({ trim: true })
    lname: string;

    @Prop({ trim: true, unique: true, required: true, index: true })
    @IsEmail()
    email: string;

    @Prop({ trim: true })
    hashedAndSaltedPassword: string;

    @Prop({ type: Boolean })
    emailVerified: false;

    @Prop({ type: [customerAdressSchema] })
    address: Types.Array<CustomerAdress>;


    @Prop({ type: [searchHistorySchema] })
    searchHistory: Types.Array<SearchHistory>;

    @Prop({ maxlength: 9 })
    phoneNumber: string

    @Prop({ minlength: 8, maxlength: 8, required: true })
    dni: string

    @Prop({ trim: true })
    photo: string
}

export const customerSchema = SchemaFactory.createForClass(Customer)