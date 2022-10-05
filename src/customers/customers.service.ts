import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Customer } from './interfaces/customers.interface';
import { Customers } from './customers.model';
import { DeleteDTO } from 'src/database/adapter/mongoose/dto/mongoose.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customers.name)
    private readonly customersModel: Model<Customers>,
  ) {}

  async getCustomer(id: string): Promise<Customers | null> {
    return this.customersModel.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  async createCustomer(dto: Customer): Promise<Customers> {
    return this.customersModel.create({
      ...dto,
    });
  }

  async updateCustomer(id: string, dto: Customer): Promise<Customers | null> {
    return this.customersModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          ...dto,
        },
      },
      {
        new: true,
      },
    );
  }

  async deleteCustomer(id: string): Promise<DeleteDTO> {
    return this.customersModel.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}
