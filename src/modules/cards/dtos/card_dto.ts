import { IsNotEmpty, MaxLength } from 'class-validator';

export class CardDTO {
  title: string;
}
export class CreateCardDTO {
  @IsNotEmpty()
  @MaxLength(20)
  name: string;
  @IsNotEmpty()
  firstName: string;
  lastName: string;

  user: string;
}
