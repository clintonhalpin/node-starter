import express from 'express';
import http from 'http';
import compression from 'compression';
import { config, env } from './lib/getConfig';

const app = express();
const server = http.createServer(app);

app.set('port', (process.env.PORT || config.port || 5000));
app.use(compression());

app.get('/', require('./lib/routes/root'));
app.get('*', require('./lib/routes/defaultError'));

const boot = (quiet) => {
    app.listen(app.get('port'), () => {
        if(!quiet) {
            console.info('Express server listening on http://localhost:%d', app.get('port'));
        }
    });
}

const shutdown = () => {
    server.close();
}

if (require.main === module) {
  boot();
} else {
  exports.app = app;
  exports.boot = boot;
  exports.shutdown = shutdown;
  exports.port = app.get('port');
  exports.config = config;
}
