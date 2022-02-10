import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  fullname: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
