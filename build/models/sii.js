"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SiiSchema = new mongoose_1.Schema({
    cliente: {
        type: String,
        required: true,
    },
    periodoRut: {
        type: String,
    },
    folio: {
        type: String,
        required: true,
        unique: true,
    },
    montoDeuda: {
        type: Number,
        required: false,
    },
    montoIu: {
        type: Number,
        required: false,
    },
    periodo: {
        type: String,
        required: true,
    },
    rut: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const SiiModel = (0, mongoose_1.model)('siis', SiiSchema);
exports.default = SiiModel;
