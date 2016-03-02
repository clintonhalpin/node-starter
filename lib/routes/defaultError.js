import { sendText, sendHtml } from './../responseUtils'; 
import express from 'express';

let app = module.exports = express.Router();

app.use(function(req, res, next){
    sendHtml(res, 404, __dirname + './../../public/404.html');
});
