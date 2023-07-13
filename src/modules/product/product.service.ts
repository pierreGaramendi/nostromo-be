import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProduct } from 'src/modules/product/dto/product.interface';
import { Product } from 'src/modules/product/schema/product.schema';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private customerModel: Model<Product>
    ) {

    }

    findAll() {
        return this.customerModel.find()
    }

    async findOne(id: string) {
        return this.customerModel.findById(id)
    }

    create(product: IProduct) {
        return this.customerModel.create(product)
    }

}
