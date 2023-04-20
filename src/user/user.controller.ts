import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';

@Controller('user')
export class UserController {


    @Post()
    async createUser(@Body() newUser: CreateUserDto) {
        return {
            ...newUser,
            password: undefined
        }
    }

    @Get()
    async getUser() {
        return JSON.stringify({
            user: "teste",
            password: "teste"
        })
    }

}
