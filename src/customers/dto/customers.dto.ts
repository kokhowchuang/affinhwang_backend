import { Customers } from '../customers.model';

export class CustomerDTO {
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

    dto.firstName = obj.firstName;
    dto.lastName = obj.lastName;

    return dto;
  }
}
