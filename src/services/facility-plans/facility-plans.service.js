// Initializes the `facility-plans` service on path `/facility-plans`
const createService = require('feathers-mongoose');
const createModel = require('../../models/facility-plans.model');
const hooks = require('./facility-plans.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'facility-plans',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/facility-plans', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('facility-plans');

  service.hooks(hooks);
};
