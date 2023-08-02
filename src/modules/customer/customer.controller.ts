import { Body, Controller, Get, NotFoundException, Param, Post, Put, SetMetadata, UseGuards } from '@nestjs/common';
import { ICustomer, ICustomerAddress, ICustomerUpdate } from 'src/modules/customer/dto/customer.dto';
import { CustomerService } from './customer.service';
import { CustomerPipeBody } from '../../pipes/customer.pipe';
import { isNil } from 'ramda'
import { manageError } from './customer.util';
import { AuthenticatedGuard } from 'src/auth/custome.guard';
import { Roles } from 'src/auth/role.decorator';

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    @Roles('admin')
    @UseGuards(AuthenticatedGuard)
    @Get()
    async findAll() {
        return await this.customerService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const task = await this.customerService.findOne(id)
        if (isNil(task)) throw new NotFoundException('No se encontro al cliente')
        return task
    }

    @Get(':id/search-history')
    async findSearchHistory(@Param('id') id: string) {
        const result = await this.customerService.getSearchHistory(id)
        const {searchHistory} = result
        if (isNil(result)) throw new NotFoundException('No se encontro al cliente')
        return searchHistory
    }

    @Post()
    async create(@Body(new CustomerPipeBody()) body: ICustomer) {
        return await this.customerService.create(body)
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
