import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import {User} from './schemas/project.schema';
import { Model , Document} from 'mongoose';


@Injectable()
export class ProjectService {
  constructor(
    @InjectModel('registerUser')
    private readonly userModel:Model<User>,
  ){}

//   Create User
async createUser(user:User) : Promise<User>{
   try {
      const newUser = new this.userModel(user);
      return newUser.save(); 

   } catch (error) {
      throw new Error(error);
   }
}


// read user collection
async readUser() {
   try {
     const users = await this.userModel.find({});
     return users;

   } catch (err) {
     console.error(err);
     throw new Error('Error reading users');
   }
 }


//  Updating the data
async updatUser(id:any,data:any) : Promise<User>{
  return this.userModel.findByIdAndUpdate(id,data,{new:true})   // if we use new:true then we can see data update using postman,but did not use new:true then cannot see data update using postman but data base data was updated.
}


// Delete Data
async deleteUser(id:any){
    return this.userModel.findByIdAndDelete(id);
}
 

}
