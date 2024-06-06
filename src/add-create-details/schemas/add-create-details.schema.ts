import { Schema, Document } from 'mongoose';

export interface postDetails extends Document {
  // Define your postDetails properties here
  userName: string;
  email: string;
  number: Number;
  location: string;
  description: string;
}

export const postDetailsSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: Number, required: true},
  location:{type:String , require:true},
  description:{type:String , require:true}

});
