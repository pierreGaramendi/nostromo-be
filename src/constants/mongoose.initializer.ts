import { MongooseModule } from "@nestjs/mongoose";
import { Customer, customerSchema } from "src/modules/customer/schema/customer.schema";

export const CustomerMongooseInitializer =  MongooseModule.forFeature([{ name: Customer.name, schema: customerSchema }])