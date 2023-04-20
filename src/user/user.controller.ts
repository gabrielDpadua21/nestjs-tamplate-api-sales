import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}


    @Post()
    async createUser(@Body() newUser: CreateUserDto) {
        return this.userService.createUser(newUser);
    }

    @Get()
    async getUsers() {
        return this.userService.getUsers();
    }

}
