const { authenticate } = require('@feathersjs/authentication').hooks;

const { fastJoin } = require('feathers-hooks-common');

const resolvers = {
    joins: {
        subscriptionName: () => async(data, context) => {
            const sub = await context.app.service('plan-types').get(data.planTypeId);
            data.name = sub.name;
        }
    }
};

module.exports = {
  before: {
    all: [],// authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [fastJoin(resolvers)],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
