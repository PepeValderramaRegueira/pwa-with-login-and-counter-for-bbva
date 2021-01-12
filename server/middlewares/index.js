const { useCors } = require('./cors.middleware');
const { useApiRoutes } = require('./routes.middleware');

module.exports = {
  useCors,
  useApiRoutes
};
