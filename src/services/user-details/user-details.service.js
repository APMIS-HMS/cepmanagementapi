// Initializes the `user-details` service on path `/user-details`
const createService = require('./user-details.class.js');
const hooks = require('./user-details.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-details', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-details');

  service.hooks(hooks);
};
