import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { AddCreateDetailsService } from './add-create-details.service';
import { CreateAddCreateDetailDto } from './dto/create-add-create-detail.dto';
import { UpdateAddCreateDetailDto } from './dto/update-add-create-detail.dto';
import { postDetails } from './schemas/add-create-details.schema';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('add-create-details')
export class AddCreateDetailsController {
   constructor(
     private readonly addCreateDetailsService: AddCreateDetailsService, //
   ){}

   @Post('post-details')
   @UseInterceptors(FileInterceptor('file'))
   async create(@Body() createAddCreateDetailDto: postDetails) {
    console.log(createAddCreateDetailDto);
    
      // return this.addCreateDetailsService.createPost(createAddCreateDetailDto)
   }
}
