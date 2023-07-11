import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICustomer } from 'src/db/customer.interface';
import { Customer } from 'src/schema/customer.schema';

@Injectable()
export class CustomerService {
    constructor(
        @InjectModel(Customer.name) private customerModel: Model<Customer>
    ) { }

    findAll() {
        return this.customerModel.find()
    }

    async findOne(id: string) {
        return this.customerModel.findById(id)
    }

    create(customer: ICustomer) {
        return this.customerModel.create(customer)
    }
}
