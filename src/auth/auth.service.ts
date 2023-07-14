import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from 'src/modules/customer/schema/customer.schema';
import { head } from 'ramda'
import { comparePassword } from './encrypt';
export interface IUser {
    email: string,
    password: string
}

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Customer.name) private customerModel: Model<Customer>
    ) { }

    async verify(email: string, password: string) {
        const users: any = await this.findOneByUsername(email);
        const user = head(users)
        if (user && comparePassword(password, user.hashedAndSaltedPassword)) {
            const { _id, fname, lname, email, phoneNumber } = user
            return { _id, fname, lname, email, phoneNumber };
        }
        return null;
    }

    async findOneByUsername(username: string) {
        return await this.customerModel.find({ email: username });
    }
}
