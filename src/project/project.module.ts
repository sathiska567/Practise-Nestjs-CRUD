import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/project.schema';

@Module({

  // register our schema
  // ! important
  imports:[
    // MongooseModule.forFeature([{name:'user',schema:User}])
    MongooseModule.forFeature([{ name: 'registerUser', schema: UserSchema }])
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
