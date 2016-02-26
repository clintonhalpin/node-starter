import expect from 'expect';
import request from 'request';
import { boot, port, shutdown, config } from './../server';

describe('Index', () => {
    const baseURL = config.protocol + config.host + ':' + port;

    it("should respond 200 when GET /", (done) => {
      boot(true);
      request.get(baseURL, (error, response, body) => {
        expect(response.statusCode).toEqual(200);
      });
      shutdown();
      done();
    });

    it("should respond 404 when GET /foo", (done) => {
      boot(true);
      request.get(baseURL + '/foo', (error, response, body) => {
        expect(response.statusCode).toEqual(200);
      });
      shutdown();
      done();
    });

});

