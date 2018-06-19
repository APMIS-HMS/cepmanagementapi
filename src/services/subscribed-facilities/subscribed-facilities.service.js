// Initializes the `subscribed-facilities` service on path `/subscribed-facilities`
const createService = require('./subscribed-facilities.class.js');
const hooks = require('./subscribed-facilities.hooks');

module.exports = function (app) {

  const paginate = app.get('paginate');

  const options = {
    name: 'subscribed-facilities',
    paginate,
    app: app
  };

  // Initialize our service with any options it requires
  app.use('/subscribed-facilities', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('subscribed-facilities');

  service.hooks(hooks);
};
