import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConstants } from 'src/common/constants';
import { CardController } from './controller/card.controller';
import { cardsHooksFactory } from './schema/card.hooks';
import { CardRepository } from './repository/card.repository';
import { CardService } from './service/card.service';
import { CardInitializerService } from './service/card-init.service';

@Module({
  controllers: [CardController],
  providers: [CardService, CardRepository, CardInitializerService],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: databaseConstants.card.name,
        useFactory: cardsHooksFactory,
      },
    ]),
  ],
})
export class CardModule {}
