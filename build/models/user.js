"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
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
        enum: ["Admin", "User"],
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const UserModel = (0, mongoose_1.model)('users', UserSchema);
exports.default = UserModel;
