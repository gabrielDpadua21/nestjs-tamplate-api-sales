import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser(newUser: CreateUserDto): Promise<User> {
        const soutOrRounds = 10;
        const passwordHash = await hash(newUser.password, soutOrRounds);

        const user: User = {
            ...newUser,
            password: passwordHash,
            nick_name: newUser.user,
            id: this.users.length + 1
        }

        this.users.push(user);

        return user
    }

    async getUsers(): Promise<User[]> {
        return this.users;
    }

}
