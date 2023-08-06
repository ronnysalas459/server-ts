"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";
const generateToken = (id) => {
    const jwt = (0, jsonwebtoken_1.sign)({ id }, JWT_SECRET, { expiresIn: '2d' });
    return jwt;
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    return (0, jsonwebtoken_1.verify)(token, JWT_SECRET);
};
exports.verifyToken = verifyToken;
