// Initializes the `providers` service on path `/providers`
const createService = require('feathers-mongoose');
const createModel = require('../../models/providers.model');
const hooks = require('./providers.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/providers', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('providers');

  service.hooks(hooks);
};
