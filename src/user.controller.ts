import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }

  @Get()
  getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Post()
  createUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() userData: { name?: string; email: string },
  ) {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    console.log(id);
    return this.userService.deleteUser({
      where: { id: Number(id) },
    });
  }
}
