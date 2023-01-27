import { Injectable } from '@nestjs/common';
import { SignupDTO } from 'src/auth/dtos/signup_dto';
import { User } from './schemas/user.schema';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(dto: SignupDTO): Promise<User> {
    const user = await this.userRepository.create({
      email: dto.email,
      password: dto.password,
      passwordConfirm: dto.passwordConfirm,
    });
    return user;
  }
}
