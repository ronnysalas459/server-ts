import { Schema, model, Types, Model } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            default: "User",
            enum: ["Admin" , "User"],
        },
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }

);

const UserModel: Model<User> = model('users', UserSchema);

export default UserModel;