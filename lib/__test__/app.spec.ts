import * as http from 'http';
import * as supertest from 'supertest';

import { Directions } from '../models';
import { getApp } from '../app';

describe('App', () => {
  let server: http.Server;
  let request: supertest.SuperTest<supertest.Test>;

  beforeAll((done) => {
    server = getApp().listen();
    request = supertest.agent(server);

    done();
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should send proper direction', () => {
    return request
      .get('/api/direction/100/200')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.direction).toBe(Directions.right);
      });
  });

  it('should send validation error', () => {
    return request
      .get('/api/direction/100/888')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toBe(
          '- property target has failed the following constraints: max'
        );
      });
  });

  it('should send invalid operation error for invalid requests', () => {
    return request
      .get('/api/direction')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toBe('invalid operation');
      });
  });

  it('should send invalid operation error for invalid url', () => {
    return request
      .get('/blabla')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.message).toBe('invalid operation');
      });
  });
});
