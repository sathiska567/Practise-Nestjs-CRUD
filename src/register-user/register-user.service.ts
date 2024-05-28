import { Injectable } from '@nestjs/common';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/register-user.schema';
import * as bcrypt from 'bcryptjs'; // Corrected import
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class RegisterUserService {
   constructor(
     @InjectModel('registerUser')
     private readonly userModel:Model<User>,
     private readonly jwtService:JwtService
   ){}

async RegisterUser(user: User) {
      console.log(user.password);     
      try {
         const salt = bcrypt.genSaltSync(10);

         // hash the password
         const hashPassword = bcrypt.hashSync(user.password, salt);
         user.password = hashPassword;
         
         const data = new this.userModel(user);
         await data.save();

         return {
            success: true,
            message: 'User registered successfully',
            user: data
         };

      } catch (error) {
         console.log(error);

         return {
            success: false,
            message: 'User registration failed',
            error: error.message
         };
      }
   }

// LOGIN User
async LoginUser(user: User) {
   console.log(user);
   try {
     const registerData = await this.userModel.findOne({ email: user.email });
     console.log(registerData._id.toString());
     console.log(registerData.email);
     

     if (!registerData) {
       return {
         success: false,
         message: 'User login failed',
         error: 'Invalid email or password'
       };
     }

   // // compare password
     const isMatch = bcrypt.compareSync(user.password, registerData.password);

   // generate token
   const token = this.jwtService.sign({
      id: registerData._id.toString(),
      email: registerData.email,
    });

    registerData.jwt = token;
    registerData.save();

     if (!isMatch) {
       return {
         success: false,
         message: 'Please enter the correct password or email'
       };
     }

     return {
       success: true,
       message: 'User logged in successfully',
       user: registerData         
      };

   } catch (error) {
     console.log(error);

     return {
       success: false,
       message: 'User login failed',
       error: error.message
     };
   }
 }
   


}
