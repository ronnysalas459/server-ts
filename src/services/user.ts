import { User } from "../interfaces/user.interface";

import UserModel from "../models/user";

const createUserService = async (user: User) => {
    const newUser = await UserModel.create(user);
    return newUser;
}


const getUsersService = async () => {

    const users = await UserModel.find({});
    return users;
}
const getUserService = async (id: string) => {

    const user = await UserModel.findOne({ _id: id });
    return user;
}

const updateUserService = async (id: string, user: User) => {
    const updatedUser = await UserModel.findOneAndUpdate({ _id: id }, user, { new: true });
    if (!updatedUser) {
        return "User no Exists"
    }
    const status = 'success';

    return { status, data: updatedUser };
}


const deleteUserService = async (id: string) => {
    const deletedUser = await UserModel.remove({ _id: id });
    const status = 'success';
    return { status, id, data: deletedUser };
}


export {
    createUserService,
    getUsersService,
    getUserService,
    updateUserService,
    deleteUserService
};