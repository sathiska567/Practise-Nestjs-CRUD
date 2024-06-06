import { Injectable } from '@nestjs/common';
import { CreateAddCreateDetailDto } from './dto/create-add-create-detail.dto';
import { UpdateAddCreateDetailDto } from './dto/update-add-create-detail.dto';
import { InjectModel } from '@nestjs/mongoose';
import { postDetails } from './schemas/add-create-details.schema';
import { Model } from 'mongoose';
import { v2 , UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

@Injectable()
export class AddCreateDetailsService {
  constructor(
    @InjectModel('postCreate')
    private readonly postCreateModel: Model<postDetails>,
  ) {
    v2.config({
        cloud_name: 'dov8hd3v6',
        api_key: '979614362974346',
        api_secret:'WsMxzHiIMq-O23Pn9qmiTOzAVF8',
    });
  }

  async createPost(filePath:string):Promise <UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      v2.uploader.upload(filePath, (error, result) => {

        if (error) {
          reject(error);
        }
        console.log(result);        
        resolve(result);
      });
    })
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
