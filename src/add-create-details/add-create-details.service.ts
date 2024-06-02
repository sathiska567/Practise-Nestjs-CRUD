import { Injectable } from '@nestjs/common';
import { CreateAddCreateDetailDto } from './dto/create-add-create-detail.dto';
import { UpdateAddCreateDetailDto } from './dto/update-add-create-detail.dto';
import { InjectModel } from '@nestjs/mongoose';
import { postDetails } from './schemas/add-create-details.schema';
import { Model } from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class AddCreateDetailsService {
  constructor(
    @InjectModel('postCreate')
    private readonly postCreateModel: Model<postDetails>,
  ) {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
    });
  }

  async createPost(postDetails: postDetails) {
    console.log(postDetails);
    // try {
    //   const data = new this.postCreateModel(postDetails);
    //   await data.save();

    //   return {
    //     success: true,
    //     message: 'Post Create successfully',
    //     createdData: data
    //   };

    // } catch (error) {
    //   return {
    //     success: false,
    //     message: 'Post Create UnSuccessfully',
    //     error: error
    //   };

    // }
  }
}
