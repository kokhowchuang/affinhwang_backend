import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeleteDTO } from 'src/database/adapter/mongoose/dto/mongoose.dto';
import { Customers } from './customers.model';
import { CustomersService } from './customers.service';
import { CustomerIDParamDTO } from './dto/customer-id-param.dto';
import { CustomerDTO } from './dto/customers.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get(':id')
  async get_customer(
    @Param() { id }: CustomerIDParamDTO,
  ): Promise<CustomerDTO> {
    const customer: Customers | null = await this.customersService.getCustomer(
      id,
    );

    if (!customer) {
      throw new HttpException('404', 404);
    }
    return CustomerDTO.fromModel(customer);
  }

  @Post()
  async create(@Body() body: CustomerDTO): Promise<CustomerDTO> {
    const customer: Customers = await this.customersService.createCustomer(
      body,
    );

    return CustomerDTO.fromModel(customer);
  }

  @Put(':id')
  async update(
    @Param() { id }: CustomerIDParamDTO,
    @Body() body: CustomerDTO,
  ): Promise<CustomerDTO> {
    const customer: Customers | null =
      await this.customersService.updateCustomer(id, body);

    if (!customer) {
      throw new HttpException('400', 400);
    }
    return CustomerDTO.fromModel(customer);
  }

  @Delete(':id')
  async delete(@Param() { id }: CustomerIDParamDTO): Promise<boolean> {
    const result: DeleteDTO = await this.customersService.deleteCustomer(id);

    if (!result.deletedCount) {
      throw new HttpException('404', 404);
    }

    return true;
  }
}
