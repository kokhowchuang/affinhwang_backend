import { ObjectId } from 'mongoose';
import { Customers } from '../customers.model';

export class CustomerDTO {
  id: ObjectId;

  firstName: string;

  lastName: string;

  email?: string;

  address?: string;

  city?: string;

  postcode?: number;

  state?: string;

  paymentDueDate?: Date;

  static fromModel(obj: Customers): CustomerDTO {
    const dto = new CustomerDTO();

    dto.id = obj.id;
    dto.firstName = obj.firstName;
    dto.lastName = obj.lastName;
    dto.email = obj.email;
    dto.address = obj.address;
    dto.city = obj.city;
    dto.postcode = obj.postcode;
    dto.state = obj.state;
    dto.paymentDueDate = obj.paymentDueDate;

    return dto;
  }
}
