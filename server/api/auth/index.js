const authRouter = require('express').Router();
const { signup } = require('./auth.controller');

authRouter.post('/signup', signup);

module.exports = {
  authRouter
}
