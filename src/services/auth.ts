import { IAuth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";


const registerNewUser = async ({ email, password, first_name,last_name, role,active }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if (checkIs) {
        return "Already exists";
    }
    const passwordHash = await encrypt(password);
    const newUser = await UserModel.create({ email, password: passwordHash, first_name,role,active,last_name });
    return newUser
}

const loginUser = async ({ email, password }: IAuth) => {
    const checkIs = await UserModel.findOne({ email });
    if (!checkIs) {

        return "User no exists";
    }
    const passwordHash = checkIs.password;
    const isMatch = await verified(password, passwordHash);
    if (!isMatch) {
        return "Password incorrect";
    }
    const token = generateToken(checkIs.email);
    const status = 'success';
    return { status, token, data: checkIs }
}

export { registerNewUser, loginUser }