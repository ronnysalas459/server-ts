"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const mongo_1 = __importDefault(require("./config/mongo"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Render');
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.router);
console.log(`conexion a la base de datos ${process.env.DB_URI}`);
(0, mongo_1.default)().then(() => console.log("Connected to MongoDB"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
