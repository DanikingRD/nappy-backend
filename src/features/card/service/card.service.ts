import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { EMPTY, mergeMap, of, throwIfEmpty } from 'rxjs';
import { UserPrincipal } from '../../auth/interface/user-principal.interface';
import { CardDTO, CreateCardDTO } from '../dto/card.dto';
import { CardRepository } from '../repository/card.repository';

@Injectable()
export class CardService {
  private readonly logger = new Logger(CardService.name);
  constructor(private readonly cardRepository: CardRepository) {}

  public create(dto: CreateCardDTO, user: UserPrincipal) {
    return this.cardRepository.create({
      ...dto,
      firstName: dto.firstName || user.email.split('@')[0] || '',
      createdBy: user.id,
    });
  }

  public getCardsByUser(user: UserPrincipal) {
    return this.cardRepository.findByUser(user);
  }

  public updateCard(id: string, dto: CardDTO, user: UserPrincipal) {
    return this.cardRepository.updateById(id, dto, user);
  }

  public assertCardBelongsTo(cardId: string, user: UserPrincipal) {
    return this.cardRepository
      .findOne({ _id: cardId, createdBy: user.id })
      .pipe(
        mergeMap((p) => (p ? of(p) : EMPTY)),
        throwIfEmpty(
          () => new NotFoundException(`Card: ${cardId} was not found`),
        ),
      );
  }

  public delete(id: string) {
    return this.cardRepository.deleteById(id).pipe(
      mergeMap((p) => (p ? of(p) : EMPTY)),
      throwIfEmpty(() => new NotFoundException(`Card: ${id} was not found`)),
    );
  }
}
