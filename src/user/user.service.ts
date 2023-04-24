import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/user.dto';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';
import { UserModel } from './models/user.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserModel)
        private readonly userRepository: Repository<UserModel>
    ) {}

    async createUser(newUser: CreateUserDto): Promise<User> {
        const soutOrRounds = 10;
        const passwordHash = await hash(newUser.password, soutOrRounds);
        return this.userRepository.save({
            ...newUser,
            type: 1,
            password: passwordHash
        })
    }

    async getUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

}
