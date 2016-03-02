import path from 'path';

export function sendText(res, status, body) {
  res.setHeader('content-type', 'text/plain');	
  res.status(status).send(body);
}

export function sendJson(res, status, body) {
  res.setHeader('content-type', 'text/json');	
  res.status(status).send(JSON.stringify(body));
}

export function sendHtml(res, status, body) {
  res.setHeader('content-type', 'text/html');
  res.status(status).sendFile(path.join(body));
}
