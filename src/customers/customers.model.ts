import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Customers extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ default: null })
  email?: string;

  @Prop({ default: null })
  address?: string;

  @Prop({ default: null })
  city?: string;

  @Prop({ default: null })
  postcode?: number;

  @Prop({ default: null })
  state?: string;

  @Prop({ default: null })
  paymentDueDate?: Date;
}

export const customerSchema = SchemaFactory.createForClass(Customers);
