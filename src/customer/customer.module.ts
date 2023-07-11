import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, customerSchema } from 'src/schema/customer.schema';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerPipeBody } from '../pipes/customer.pipe';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: Customer.name,
                    schema: customerSchema
                }
            ]
        )
    ],
    providers: [CustomerService, CustomerPipeBody],
    controllers: [CustomerController]
})
export class CustomerModule { }
