"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
const porta = process.env.PORT || 5000;
app.listen(porta, () => {
    console.log(`server running port ${porta} for project: ${process.env.PROJECT_NAME}`);
});
