const users = require('./users/users.service.js');
const planTypes = require('./plan-types/plan-types.service.js');
const facilityPlans = require('./facility-plans/facility-plans.service.js');
const subscribedFacilities = require('./subscribed-facilities/subscribed-facilities.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(planTypes);
  app.configure(facilityPlans);
  app.configure(subscribedFacilities);
};
