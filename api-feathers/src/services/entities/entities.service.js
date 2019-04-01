// Initializes the `entities` service on path `/entities`
const createService = require('feathers-mongoose');
const createModel = require('../../models/entities.model');
const hooks = require('./entities.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/entities', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('entities');

  service.hooks(hooks);
};
