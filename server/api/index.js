const apiRouter = require('express').Router();
const { authRouter } = require('./auth');

apiRouter.get('/', (req, res) => res.send('SERVER STATUS ...... ONLINE'));

apiRouter.use('/auth', authRouter);

module.exports = {
  apiRouter
}
