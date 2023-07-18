import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProduct } from 'src/modules/product/dto/product.interface';
import { Product } from 'src/modules/product/schema/product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    async findAll() {
        return await this.productModel.find()
    }

    async findOne(id: string) {
        return await this.productModel.findById(id)
    }

    async create(product: IProduct) {
        return await this.productModel.create(product)
    }

}
