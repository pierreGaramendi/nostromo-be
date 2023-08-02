import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Suggestion extends Document {
    @Prop({ type: String, trim: true, required: true })
    suggestion: string;
    @Prop({ type: Number, trim: true, required: true })
    complaints: number;
    @Prop({ type: Number, trim: true, required: true })
    used: number;
}
export const suggestionSchema = SchemaFactory.createForClass(Suggestion)