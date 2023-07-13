import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as SchemaTypes } from "mongoose";
import { Customer } from "../../customer/schema/customer.schema";

@Schema({ timestamps: true })
export class Discount extends Document {
    @Prop({ trim: true, required: true })
    percentage: number;
    @Prop()
    active: boolean;
}

export const discountSchema = SchemaFactory.createForClass(Discount)

@Schema({ timestamps: true })
export class Product extends Document {

    @Prop({ trim: true, required: true })
    title: string;

    @Prop({ type: SchemaTypes.Types.ObjectId, ref: 'Customer' })
    sellerId: Customer;

    @Prop({ trim: true })
    description: string;

    @Prop({ trim: true })
    skus: string[];

    @Prop()
    categories: string[];

    @Prop()
    price: number;

    @Prop({ trim: true })
    quantity: number;

    @Prop()
    images: string[];

    @Prop({ required: true })
    condition: string;

    @Prop()
    discount: Discount;

    @Prop()
    brand: string;

    @Prop()
    sold: number;

    @Prop()
    PUC: string;

    @Prop()
    warranty: string;

    @Prop()
    pickUpInPerson: boolean
}

export const productSchema = SchemaFactory.createForClass(Product)