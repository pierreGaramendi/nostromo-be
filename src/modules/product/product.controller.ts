import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { isNil } from 'ramda'
import { CustomerPipeBody } from 'src/pipes/customer.pipe';
import { manageError } from 'src/modules/customer/customer.util';
import { IProduct } from 'src/modules/product/dto/product.interface';
import { ApiExtraModels } from '@nestjs/swagger';
import { PaginatedDto } from 'src/utils/pagination.dto';

@Controller('product')
@ApiExtraModels(PaginatedDto)
export class ProductController {
    constructor(private productService: ProductService){}
    
    @Get()
    @ApiExtraModels(PaginatedDto)
    findAll() {
        const test = this.productService.findAll()
        console.log(test)
        return test
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
