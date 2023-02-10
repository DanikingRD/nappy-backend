import { Controller, Get, Param } from '@nestjs/common';
import { GetUserParams } from './dto/get-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getAllUsers() {
    const users = await this.userService.findAll();
    return {
      users,
    };
  }

  @Get(':id')
  public async getUserById(@Param() params: GetUserParams) {
    const user = await this.userService.find(params.id);
    return {
      user,
    };
  }
}