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
  }

 // uplaod details to the backend
  async create(createAddCreateDetails: postDetails){
     console.log(createAddCreateDetails);

     try {
      const data = await this.postCreateModel.create(createAddCreateDetails)

      return {
        success: true,
        message: 'User registered successfully',
        user: data
     };
      
     } catch (error) {
      return {
        success: false,
        message: 'Add Create Unsuccessful',
        error
     };
     }
     
  }


//  get created Details
async getAll() {
  try {
    const data = await this.postCreateModel.find().exec();
    return {
      success: true,
      message: 'Successfully fetched',
      data
    };
  } catch (error) {
    return {
      success: false,
      message: 'Unsuccessful',
    }
}

}
}
