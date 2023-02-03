import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import * as cardSchemaRules from './rules';

export type CardDocument = Card & Document;

@Schema({ timestamps: true })
export class Card extends mongoose.Document {
  @Prop(cardSchemaRules.nameRules)
  name: string;
  @Prop(cardSchemaRules.firstNameRules)
  firstName: string;
  @Prop(cardSchemaRules.lastNameRules)
  lastName: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
