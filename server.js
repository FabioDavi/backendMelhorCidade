"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
const porta = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(porta, () => {
    console.log(`server running port ${porta} for project: ${process.env.PROJECT_NAME}`);
});
