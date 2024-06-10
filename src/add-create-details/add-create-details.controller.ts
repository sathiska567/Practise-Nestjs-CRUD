import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AddCreateDetailsService } from './add-create-details.service';
import { CreateAddCreateDetailDto } from './dto/create-add-create-detail.dto';
import { UpdateAddCreateDetailDto } from './dto/update-add-create-detail.dto';
import { postDetails } from './schemas/add-create-details.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
// import { Multer } from 'multer';

@Controller('add-create-details')
export class AddCreateDetailsController {
   constructor(
     private readonly addCreateDetailsService: AddCreateDetailsService, //
   ){}

   @Post('upload-image')
   @UseInterceptors(FileInterceptor('image'))
   async uploadFile(@UploadedFile() file:Express.Multer.File) {
    console.log(file);
    
    const result = await this.addCreateDetailsService.createPost(file.path)
    return result
      // return this.addCreateDetailsService.createPost(createAddCreateDetailDto)
   }

   @Post('post-details')
   async uploadData(@Body() addCreatedDetails:postDetails) {
    // console.log(addCreatedDetailsDTO);
      return this.addCreateDetailsService.create(addCreatedDetails)
   }


  //  Get Created Add Details
  @Get('get-created-adds')
  async getDetails(){
      return this.addCreateDetailsService.getAll()
  }

  }
