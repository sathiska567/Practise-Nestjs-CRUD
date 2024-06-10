import { Injectable } from '@nestjs/common';
import { CreateBrowsClassDto } from './dto/create-brows-class.dto';
import { UpdateBrowsClassDto } from './dto/update-brows-class.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { postDetails } from 'src/add-create-details/schemas/add-create-details.schema';
import { SearchDetailsDTO } from 'src/brows-class/dto/search-detail.dto';

@Injectable()
export class BrowsClassService {
  constructor(
    @InjectModel('postCreate')
    private readonly postCreateModel: Model<postDetails>,
  ) {}

// Get Filter Data
  async getSearchData(searchData:SearchDetailsDTO){
    console.log(searchData.data);
    const filterData = []
    try {
      const postData = await this.postCreateModel.find();  

      if(searchData.data == ''){
        return {
          success: true,
          message: 'Searching Data Successful',
          data: postData
        }
      }
      
      for (let i = 0; i < postData.length; i++) {
        if(postData[i].location == searchData.data){
          filterData.push(postData[i])
        }
        
      }

      if(filterData.length == 0){
        return {
          success: false,
          message: 'Searching Data Not Found',
        }
      }

      return {
        success: true,
        message: 'Searching Data Successful',
        data: filterData
      }
      
    } catch (error) {
      return {
        success: false,
        message: 'Searching Data Unsuccessful',
        error: error
     };
    }
    
  }


}
