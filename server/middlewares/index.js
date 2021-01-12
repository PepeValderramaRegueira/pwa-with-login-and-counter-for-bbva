const { useCors } = require('./cors.middleware');
const { useApiRoutes } = require('./routes.middleware');
const { useBodyParser } = require('./body-parser.middleware');

module.exports = {
  useCors,
  useApiRoutes,
  useBodyParser
};
