import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
