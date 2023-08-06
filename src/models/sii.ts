import { Schema, model, Types, Model } from 'mongoose';
import { Sii } from '../interfaces/sii.interface';

const SiiSchema = new Schema<Sii>(
    {
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
    },
    {
        timestamps: true,
        versionKey: false,
    }

);

const SiiModel: Model<Sii> = model('siis', SiiSchema);

export default SiiModel;