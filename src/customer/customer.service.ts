import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICustomer, ICustomerAddress, ICustomerUpdate } from 'src/db/customer.interface';
import { Customer } from 'src/schema/customer.schema';
import { buildUpdateParams } from 'src/utils/update.util';

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

    async update(id: string, customer: ICustomerUpdate) {
        return this.customerModel.findByIdAndUpdate(id, customer, { new: true })
    }

    async addAddress(id: string, address: ICustomerAddress) {
        return this.customerModel.updateOne(
            { _id: id },
            { $addToSet: { address: address } }
        )
    }

    async updateAddress(id: string, address: ICustomerAddress, idAddress: string) {
        return this.customerModel.findOneAndUpdate(
            { _id: id, "address._id": idAddress },
            { $set: buildUpdateParams('address', address) }
        )
    }
}
