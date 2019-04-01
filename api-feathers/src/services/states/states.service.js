// Initializes the `states` service on path `/states`
const createService = require('feathers-mongoose');
const createModel = require('../../models/states.model');
const hooks = require('./states.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/states', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('states');

  service.hooks(hooks);
};
