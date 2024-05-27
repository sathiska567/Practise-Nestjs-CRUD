import { Schema, Document } from 'mongoose';

export interface User extends Document {
  // Define your user properties here
  username: string;
  description: string;
}

export const UserSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },

});
