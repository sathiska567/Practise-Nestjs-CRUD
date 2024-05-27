import { Module } from '@nestjs/common';
import { RegisterUserService } from './register-user.service';
import { RegisterUserController } from './register-user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/register-user.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'registerUser', schema: UserSchema }])
  ],
  controllers: [RegisterUserController],
  providers: [RegisterUserService],
})
export class RegisterUserModule {}
