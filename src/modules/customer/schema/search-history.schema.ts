import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class SearchHistory extends Document {
    @Prop({ type: String, trim: true, required: true })
    suggestion: string;
}
export const searchHistorySchema = SchemaFactory.createForClass(SearchHistory)