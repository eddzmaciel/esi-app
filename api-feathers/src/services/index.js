const reports = require('./reports/reports.service.js');
const clients = require('./clients/clients.service.js');
const users = require('./users/users.service.js');
const roles = require('./roles/roles.service.js');
const providers = require('./providers/providers.service.js');
const quotations = require('./quotations/quotations.service.js');
const states = require('./states/states.service.js');
const cities = require('./cities/cities.service.js');
const entities = require('./entities/entities.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(reports);
  app.configure(clients);
  app.configure(users);
  app.configure(roles);
  app.configure(providers);
  app.configure(quotations);
  app.configure(states);
  app.configure(cities);
  app.configure(entities);
};
