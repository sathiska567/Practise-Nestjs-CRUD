import { Injectable } from '@nestjs/common';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/register-user.schema';

@Injectable()
export class RegisterUserService {
   constructor(
     @InjectModel('registerUser')
     private readonly userModel:Model<User>
   ){}

   async RegisterUser(user:User){
      console.log(user);      
   }

}
