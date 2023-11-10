"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const httpReq_1 = require("./httpReq");
const app = (0, express_1.default)();
const port = 1212;
const corsOptions = {
    origin: [
        'http://localhost:5678', //dev front
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('This is back');
});
//http://localhost:1212/uploadphoto
app.post('/uploadphoto', httpReq_1.upload.single('image'), (req, res) => {
    const imageFile = req.file;
    if (!imageFile) {
        res.status(400).send('未收到圖片');
        res.send(`photot save fail`);
    }
    else {
        res.send(`photot save success`);
    }
});
app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
});
