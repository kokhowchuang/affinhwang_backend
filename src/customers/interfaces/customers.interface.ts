export interface Customer {
  firstName: string;
  lastName: string;
  email?: string;
  address?: string;
  city?: string;
  postcode?: number;
  state?: string;
  paymentDueDate?: Date;
}
