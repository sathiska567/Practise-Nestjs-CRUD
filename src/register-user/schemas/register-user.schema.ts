import { Schema, Document } from 'mongoose';

export interface User extends Document {
  // Define your user properties here
  email: string;
  password: string;
}

export const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },

});
