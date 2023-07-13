import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { isNil } from 'ramda'
import { CustomerPipeBody } from 'src/pipes/customer.pipe';
import { manageError } from 'src/modules/customer/customer.util';
import { IProduct } from 'src/modules/product/dto/product.interface';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){

    }
    @Get()
    findAll() {
        return this.productService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const task = await this.productService.findOne(id)
        if (isNil(task)) throw new NotFoundException('No se encontro al cliente')
        return task
    }

    @Post()
    create(@Body(new CustomerPipeBody()) body: IProduct) {
        return this.productService.create(body)
            .catch(manageError)
    }

}
