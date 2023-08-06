import { Request, Response } from "express";
import {
    createUserService,
    getUsersService,
    getUserService,
    updateUserService,
    deleteUserService
} from "../services/user";
import { handleHttp } from "../utils/error.handle"

const getUsers = async (req: Request, res: Response) => {
    try {
        const responseUsers = await getUsersService();
        res.send(responseUsers);

    } catch (e) {
        handleHttp(res, 'Error getting users');
    }
}

const getUser = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseUser = await getUserService(id);
        const data = responseUser ? responseUser : { "message": "User not found" };
        res.send(data);
    } catch (e) {
        handleHttp(res, 'Error getting user');
    }
}

const updateUser = async ({ params, body }: Request, res: Response) => {

    try {
        const { id } = params;
        const responseUser = await updateUserService(id, body);

        const data = responseUser ? responseUser : { "message": "User not found" };
        res.send(data);
    } catch (e) {
        handleHttp(res, 'Error updating users');
    }
}

const deleteUser = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseUser = await deleteUserService(id);
        res.send(responseUser);
    } catch (e) {
        handleHttp(res, 'Error deleting users');
    }
}

const postUser = async ({ body }: Request, res: Response) => {
    try {
        const responseUser = await createUserService(body);
        res.send(responseUser);
    } catch (e) {
        handleHttp(res, 'Error creating users', e);
    }
}

export { getUsers, getUser, updateUser, deleteUser, postUser }
