import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface UserModel extends Document {
    username: string;
    password: string;
}

const userSchema: Schema = new mongoose.Schema({
    username:{type:String, required: true},
    password:{type:String, required: true}
})

export default mongoose.model<UserModel>("user", userSchema)