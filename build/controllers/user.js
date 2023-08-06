"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = void 0;
const user_1 = require("../services/user");
const error_handle_1 = require("../utils/error.handle");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseUsers = yield (0, user_1.getUsersService)();
        res.send(responseUsers);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'Error getting users');
    }
});
exports.getUsers = getUsers;
const getUser = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseUser = yield (0, user_1.getUserService)(id);
        const data = responseUser ? responseUser : { "message": "User not found" };
        res.send(data);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'Error getting user');
    }
});
exports.getUser = getUser;
const updateUser = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseUser = yield (0, user_1.updateUserService)(id, body);
        const data = responseUser ? responseUser : { "message": "User not found" };
        res.send(data);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'Error updating users');
    }
});
exports.updateUser = updateUser;
const deleteUser = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const responseUser = yield (0, user_1.deleteUserService)(id);
        res.send(responseUser);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'Error deleting users');
    }
});
exports.deleteUser = deleteUser;
const postUser = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseUser = yield (0, user_1.createUserService)(body);
        res.send(responseUser);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'Error creating users', e);
    }
});
exports.postUser = postUser;
