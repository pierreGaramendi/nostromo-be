import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from 'src/modules/customer/schema/customer.schema';
import { head } from 'ramda';
import { comparePassword } from './encrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async verify(email: string, password: string) {
    const users: Customer[] = await this.findOneByUsername(email);
    const user: Customer = head(users);
    if (user && comparePassword(password, user.hashedAndSaltedPassword)) {
      const { fname, lname, email, phoneNumber } = user;
      return { fname, lname, email, phoneNumber };
    }
    return null;
  }

  async findOneByUsername(username: string): Promise<Customer[]> {
    return await this.customerModel
      .find({ email: username })
      .select('username fname lname email phoneNumber hashedAndSaltedPassword');
  }
}
