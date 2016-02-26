export function sendText(res, status, body) {
  res.status(status).send(body);
}