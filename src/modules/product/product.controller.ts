import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { isNil } from 'ramda'
import { CustomerPipeBody } from 'src/pipes/customer.pipe';
import { manageError } from 'src/modules/customer/customer.util';
import { IProduct } from 'src/modules/product/dto/product.interface';
import { PagePipe } from './pipe/page.pipe';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get('search')
    search(@Query(new PagePipe()) query: any) {
        return this.productService.search(query)
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const task = await this.productService.findOne(id)
        if (isNil(task)) throw new NotFoundException('No se encontro el producto')
        return task
    }

    @Post()
    create(@Body(new CustomerPipeBody()) body: IProduct) {
        return this.productService.create(body).catch(manageError)
    }

}
