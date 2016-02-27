import { sendText } from './../responseUtils';
import express from 'express';

let app = module.exports = express.Router();

app.get('/', (req, res) => {
    sendText(res, 200, 'HI');
});
