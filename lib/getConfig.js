const env = process.env.NODE_ENV || 'development';
const config = require('./../etc/.env' + (env ? '.' + env : '') + '.js');

module.exports = {
  env,
  config
};