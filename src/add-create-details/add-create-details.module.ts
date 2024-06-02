import { Module } from '@nestjs/common';
import { AddCreateDetailsService } from './add-create-details.service';
import { AddCreateDetailsController } from './add-create-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { postDetailsSchema } from './schemas/add-create-details.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({

   imports:[
    MongooseModule.forFeature([{ name: 'postCreate', schema: postDetailsSchema }]),
    MulterModule.register({
      dest: './uploads',   // Destination folder for uploaded files
    })
   ],

  controllers: [AddCreateDetailsController],
  providers: [AddCreateDetailsService],
})
export class AddCreateDetailsModule {}
