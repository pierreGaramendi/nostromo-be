import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerPipeBody } from '../../pipes/customer.pipe';
import { CustomerMongooseInitializer } from 'src/constants/mongoose.initializer';

@Module({
    imports: [
        CustomerMongooseInitializer
    ],
    providers: [
        CustomerService,
        CustomerPipeBody
    ],
    controllers: [
        CustomerController
    ]
})
export class CustomerModule { }
