// Initializes the `quotations` service on path `/quotations`
const createService = require('feathers-mongoose');
const createModel = require('../../models/quotations.model');
const hooks = require('./quotations.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/quotations', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('quotations');

  service.hooks(hooks);
};
