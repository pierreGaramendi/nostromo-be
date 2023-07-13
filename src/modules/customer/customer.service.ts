import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICustomer, ICustomerAddress, ICustomerUpdate } from 'src/modules/customer/dto/customer.dto';
import { Customer } from 'src/modules/customer/schema/customer.schema';
import { buildUpdateParams } from 'src/utils/update.util';

@Injectable()
export class CustomerService {
    constructor(
        @InjectModel(Customer.name) private customerModel: Model<Customer>
    ) { }

    async findAll() {
        return await this.customerModel.find()
    }

    async findOne(id: string) {
        return await this.customerModel.findById(id)
    }

    async create(customer: ICustomer) {
        return await this.customerModel.create(customer)
    }

    async update(id: string, customer: ICustomerUpdate) {
        return await this.customerModel.findByIdAndUpdate(id, customer, { new: true })
    }

    async addAddress(id: string, address: ICustomerAddress) {
        return await this.customerModel.updateOne(
            { _id: id },
            { $addToSet: { address: address } }
        )
    }

    async updateAddress(id: string, address: ICustomerAddress, idAddress: string) {
        return await this.customerModel.findOneAndUpdate(
            { _id: id, "address._id": idAddress },
            { $set: buildUpdateParams('address', address) }
        )
    }

}
