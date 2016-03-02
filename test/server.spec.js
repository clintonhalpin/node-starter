const expect = require('chai').expect;
import request from 'request';
import { boot, port, shutdown, config } from './../server';

describe('Api', () => {

    const baseURL = config.protocol + config.host + ':' + port;

    before(()=> {
        boot(true);
    });

    it("200 when GET /", (done) => {
      request.get(baseURL, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("404 when GET /foo", (done) => {
      request.get(baseURL + '/fooooo', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

});

