import { Body, Controller, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ICustomer, ICustomerAddress, ICustomerUpdate } from 'src/modules/customer/dto/customer.dto';
import { CustomerService } from './customer.service';
import { CustomerPipeBody } from '../../pipes/customer.pipe';
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

    @Put(':id')
    async update(@Param('id') id: string, @Body(new CustomerPipeBody()) customer: ICustomerUpdate) {
        const customerUpdated = await this.customerService.update(id, customer)
        if (isNil(customerUpdated)) throw new NotFoundException()
        return customerUpdated
    }

    @Put(':id/address')
    async addAddress(@Param('id') id: string, @Body() address: ICustomerAddress) {
        const customerUpdated = await this.customerService.addAddress(id, address)
        return customerUpdated
    }

    @Put(':id/address/:idAddress')
    async updateAddress(@Param('id') id: string, @Param('idAddress') idAddress: string, @Body() address: ICustomerAddress) {
        const customerUpdated = await this.customerService.updateAddress(id, address, idAddress)
        return customerUpdated
    }

}
