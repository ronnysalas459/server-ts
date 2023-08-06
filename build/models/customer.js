"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CustomerSchema = new mongoose_1.Schema({
    business_name: {
        type: String,
        required: true,
        unique: true
    },
    document_number: {
        type: String,
        required: true,
        unique: true,
    },
    comercial_activity: {
        type: String,
        required: true,
    },
    billing_address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    manager: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false,
});
const CustomerModel = (0, mongoose_1.model)('customers', CustomerSchema);
exports.default = CustomerModel;
