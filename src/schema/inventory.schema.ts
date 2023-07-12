import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Price extends Document {
    @Prop({ required: true })
    base: number;

    @Prop({ trim: true,required: true })
    currency: string;

    @Prop()
    discount: number;
}


@Schema({ timestamps: true })
export class Skus extends Document {
    @Prop({ trim: true, required: true })
    sku: string;

    @Prop()
    price: Price;

    @Prop({ trim: true })
    quantity: number;

    @Prop()
    images: string[];
}


@Schema({ timestamps: true })
export class Inventory extends Document {
    @Prop({ trim: true, required: true })
    item: string;

    @Prop({ trim: true })
    feature: string;

    @Prop({ trim: true })
    skus: Skus[];
}

export const inventorySchema = SchemaFactory.createForClass(Inventory)