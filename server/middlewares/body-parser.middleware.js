const bodyParser = require('body-parser');

function useBodyParser(app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
}

module.exports = {
  useBodyParser
}
