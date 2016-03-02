import { sendText, sendHtml, sendJson } from './../responseUtils';
import express from 'express';

let app = module.exports = express.Router();

app.get('/', (req, res) => {
	
	const data = {
		name: 'Clinton',
		email: 'clintonhalpin@gmail.com'
	};

    sendJson(res, 200, data);
});
