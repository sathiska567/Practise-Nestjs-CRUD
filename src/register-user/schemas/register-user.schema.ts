import { Schema, Document } from 'mongoose';

export interface User extends Document {
  // Define your user properties here
  email: string;
  password: string;
  jwt:string;
  isAdmin:boolean;
}

export const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  jwt: { type: String, required: false,default:null},
  isAdmin:{type:Boolean , require:false,default:false}

});
