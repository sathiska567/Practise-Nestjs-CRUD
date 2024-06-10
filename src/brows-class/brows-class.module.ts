import { Module } from '@nestjs/common';
import { BrowsClassService } from './brows-class.service';
import { BrowsClassController } from './brows-class.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { postDetailsSchema } from 'src/add-create-details/schemas/add-create-details.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'postCreate', schema: postDetailsSchema }]),
  ],
  controllers: [BrowsClassController],
  providers: [BrowsClassService],
})
export class BrowsClassModule {}
