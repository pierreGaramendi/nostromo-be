import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, productSchema } from 'src/modules/product/schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: productSchema }])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
