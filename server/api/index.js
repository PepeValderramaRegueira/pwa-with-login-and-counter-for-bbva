const apiRouter = require('express').Router();

apiRouter.get('/', (req, res) => res.send('SERVER STATUS ...... ONLINE'));

module.exports = {
  apiRouter
}
