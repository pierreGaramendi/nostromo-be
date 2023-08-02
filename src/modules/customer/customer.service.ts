import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { encodePassword } from 'src/auth/encrypt';
import { ICustomer, ICustomerAddress, ICustomerUpdate } from 'src/modules/customer/dto/customer.dto';
import { Customer } from 'src/modules/customer/schema/customer.schema';
import { buildUpdateParams } from 'src/utils/update.util';
import { dissoc, assoc, pick } from 'ramda'
import { propsToGet } from './constants/customer.constants';
@Injectable()
export class CustomerService {
    constructor(
        @InjectModel(Customer.name) private customerModel: Model<Customer>
    ) { }

    async findAll() {
        return await this.customerModel.find({}, { hashedAndSaltedPassword: 0, emailVerified: 0 })
    }

    async findOne(id: string) {
        return await this.customerModel.findById(id)
    }

    async getSearchHistory(id: string) {
        return await this.customerModel.findById(id).select('searchHistory -_id')
    }

    async create(customer: ICustomer) {
        const hashedAndSaltedPassword = encodePassword(customer.password)
        const newCustomer = assoc('hashedAndSaltedPassword', hashedAndSaltedPassword, dissoc('password', customer))
        const result = await this.customerModel.create(newCustomer)
        return pick(propsToGet, result)
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
