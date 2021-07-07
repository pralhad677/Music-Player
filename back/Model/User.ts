import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
 email:string
}
const UserSchema: Schema = new Schema({

  email: { type: String, required: true }
});

export const User: Model<IUser> = model('User', UserSchema);