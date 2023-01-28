import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {
  emailRules,
  passwordConfirmRules,
  passwordRules,
} from '../user.validations';

export type UserDocument = User & Document;

@Schema()
export class User extends mongoose.Document {
  @Prop(emailRules)
  email: string;
  @Prop(passwordRules)
  password: string;

  @Prop(passwordConfirmRules)
  passwordConfirm: string;
}

export const UserSchema = SchemaFactory.createForClass(User);