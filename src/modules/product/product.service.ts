import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IProduct } from 'src/modules/product/dto/product.interface';
import { Product } from 'src/modules/product/schema/product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }

    async findAll() {
        const options = {
            page: 1,
            limit: 10,
          };
          
        var myAggregate:any = this.productModel.aggregate()

        await myAggregate.paginateExec(options, function(err, results) {
            if(err) {
                console.log(err);
            }
            else {
                console.log(typeof results)
               return JSON.parse(results) ;
            }
        })

/*         return await this.productModel.find(
            {},
            {
                page: Number(1),
                limit: Number(10),
            },
        ); */
    }

    async findOne(id: string) {
        return await this.productModel.findById(id)
    }

    async create(product: IProduct) {
        return await this.productModel.create(product)
    }

}
