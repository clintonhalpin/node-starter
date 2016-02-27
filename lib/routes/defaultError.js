import { sendText } from './../responseUtils'; 
import express from 'express';

let app = module.exports = express.Router();

app.use(function(req, res, next){
    sendText(res, 404, 'Error');
});
