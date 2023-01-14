import {
  expect, jest, it, beforeAll, describe,
} from '@jest/globals';
import supertest from 'supertest';
import path from 'path';
import app from '../../src/index.js';

beforeAll(() => {
  jest.spyOn(global.console, 'error').mockImplementation();
});

describe('PUT, GET and DELETE /api/useCloudVisionAPI', () => {
  it('should not allow a PUT, GET or DELETE request', async () => {
    const response = await supertest(app).put('/api/useCloudVisionAPI').send({});
    expect(response.statusCode).toBe(404);
  });
});

describe('POST /api/useCloudVisionAPI', () => {
  it('it should not allow to request without a option query', async () => {
    const response = await supertest(app).post('/api/useCloudVisionAPI').send({});
    expect(response.statusCode).toBe(400);
  });

  it('it should not allow to request with a wrong option', async () => {
    const response = await supertest(app).post('/api/useCloudVisionAPI?option=LANDMARK_ANNOTATION').send({});
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('The provided option is not supported by this application');
  });

  it('it should not allow to request without an image file', async () => {
    const response = await supertest(app).post('/api/useCloudVisionAPI?option=FACE_DETECTION').send({});
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('You must upload an image (maximum image size is 10MB)');
  });

  it('it should not allow to request without a PNG, JPEG or JPG file', async () => {
    const response = await supertest(app).post('/api/useCloudVisionAPI?option=FACE_DETECTION')
      .attach('image', path.resolve('__tests__', 'files', 'file.txt'));
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Invalid file. It\'s only accepted images '
        + 'with the following extensions: png, jpeg and jpg');
  });

  it('it should not allow to request without a PNG, JPEG or JPG file', async () => {
    const response = await supertest(app).post('/api/useCloudVisionAPI?option=FACE_DETECTION')
      .attach('image', path.resolve('__tests__', 'files', 'file.txt'));
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Invalid file. It\'s only accepted images '
        + 'with the following extensions: png, jpeg and jpg');
  });
});
