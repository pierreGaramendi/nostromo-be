import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { ICustomer } from 'src/db/customer.interface';
import { CustomerService } from './customer.service';
import { CustomerPipeBody } from '../pipes/customer.pipe';
import { isNil } from 'ramda'
import { manageError } from './customer.util';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    @Get()
    findAll() {
        return this.customerService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const task = await this.customerService.findOne(id)
        if (isNil(task)) throw new NotFoundException('No se encontro al cliente')
        return task
    }

    @Post()
    create(@Body(new CustomerPipeBody()) body: ICustomer) {
        return this.customerService.create(body)
            .catch(manageError)
    }

}
