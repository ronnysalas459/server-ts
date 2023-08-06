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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.getUserService = exports.getUsersService = exports.createUserService = void 0;
const user_1 = __importDefault(require("../models/user"));
const createUserService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield user_1.default.create(user);
    return newUser;
});
exports.createUserService = createUserService;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.find({});
    return users;
});
exports.getUsersService = getUsersService;
const getUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findOne({ _id: id });
    return user;
});
exports.getUserService = getUserService;
const updateUserService = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_1.default.findOneAndUpdate({ _id: id }, user, { new: true });
    if (!updatedUser) {
        return "User no Exists";
    }
    const status = 'success';
    return { status, data: updatedUser };
});
exports.updateUserService = updateUserService;
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_1.default.remove({ _id: id });
    const status = 'success';
    return { status, id, data: deletedUser };
});
exports.deleteUserService = deleteUserService;
