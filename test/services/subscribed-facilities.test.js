const assert = require('assert');
const app = require('../../src/app');

describe('\'subscribed-facilities\' service', () => {
  it('registered the service', () => {
    const service = app.service('subscribed-facilities');

    assert.ok(service, 'Registered the service');
  });
});
