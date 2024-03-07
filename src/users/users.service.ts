import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {} // Inyectamos el modelo de Usuarios

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  }

