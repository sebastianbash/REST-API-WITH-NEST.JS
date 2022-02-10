import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'; 
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.dto';


@Injectable()
export class UserService {
    
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find().exec();
        return users;
    }

    async getUser(userId: string): Promise<User> {
        const user = await this.userModel.findById(userId);
        return user;
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        const newUser = new this.userModel(createUserDTO);
        return await newUser.save();
    }

    async deleteUser(userId: string): Promise<any> {
        const deletedUser = await this.userModel.findByIdAndDelete(userId);
        return deletedUser;
    }

    async updateUser(userId: string, createUserDTO: CreateUserDTO): Promise<User> {
        const updatedUser = await this.userModel.findByIdAndUpdate(userId, createUserDTO, { new: true });
        return updatedUser;
    }

}