import mongoose from "mongoose";

export interface UsersI extends mongoose.Document {    
    us_email: string
    us_password: string
}

const UserSchema = new mongoose.Schema<UsersI>({    
    us_email: { type: String, required: true, trim: true, unique: true },
    us_password: { type: String, required: true }
});

export const Users = mongoose.model<UsersI>('Users', UserSchema);