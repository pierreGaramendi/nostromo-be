import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProduct } from 'src/modules/product/dto/product.interface';
import { Product } from 'src/modules/product/schema/product.schema';
import { take } from 'ramda'
@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    async findAll(query: any) {
        const { structureSearch, structureNext, sctructureSort, defaultLimit } = query
        const found = await this.productModel.find(structureSearch).select('title price _id').sort(sctructureSort);
        const total = found.length
        const result = found.filter(product => product._id < '64b625b43a261e9bfd7d8424');
        const items = take(3, result)
        const last = Math.ceil(total/3)
        return { total, last, items }
    }

    async findOne(id: string) {
        return await this.productModel.findById(id)
    }

    async create(product: IProduct) {
        return await this.productModel.create(product)
    }

}
