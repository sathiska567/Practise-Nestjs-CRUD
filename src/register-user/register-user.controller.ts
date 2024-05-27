import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterUserService } from './register-user.service';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';
import { User } from './schemas/register-user.schema';

@Controller('register-user')
export class RegisterUserController {
  // import the service to further work
   constructor (private readonly registerUserService: RegisterUserService) {}

   @Post('details')
   async createUser(@Body() createRegisterUserDto: User){
      return this.registerUserService.RegisterUser(createRegisterUserDto)
   }
}
