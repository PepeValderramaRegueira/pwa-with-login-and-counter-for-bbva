const cors = require('cors');

const useCors = (app) => {
  app.use(cors({
    origin: '*'
  }))
};

module.exports = {
  useCors
}
