import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoDBRepository } from 'src/database/repository/impl/mongo.repository-impl';
import { Card, CardDocument } from './schema';

type T = CardDocument;
@Injectable()
export class CardRepository extends MongoDBRepository<T> {
  constructor(@InjectModel(Card.name) protected readonly cardModel: Model<T>) {
    super(cardModel);
  }
}
