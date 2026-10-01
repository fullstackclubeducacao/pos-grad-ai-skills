const { test } = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');

const app = require('../app');

test('GET /ping responde 200 com pong', async () => {
  const res = await request(app).get('/ping');

  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { message: 'pong' });
});
