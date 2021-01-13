const bcrypt = require('bcrypt');
const Users = require('./../users/users.model');
const {
  PASSWORDS_DONT_MATCH,
  PASSWORD_NOT_PROVIDED,
  USER_CREATED,
  USER_PASSWORD_EMPTY,
  USER_PASSWORD_WRONG,
  USER_NOT_FOUND
} = require('./../../utils/messages');
const { response } = require('./../../utils/responses');
const { saveUserToDB } = require('./../libs/users.lib');

const signup = async(req, res, next) => {
  const serverResponse = response(res);
  const { password, repeatedPassword } = req.body;

  if (!password || !repeatedPassword) {
    return serverResponse({
      status: 400,
      message: PASSWORD_NOT_PROVIDED
    });
  }

  if (password !== repeatedPassword) {
    return serverResponse({
      status: 400,
      message: PASSWORDS_DONT_MATCH
    });
  }
  
  try {
    const newUser = await saveUserToDB(req.body);
    newUser.lastLogin = Date.now();

    return serverResponse({
      status: 201,
      message: USER_CREATED,
      data: {
        user: newUser
      }
    });
  } catch (err) {
    return serverResponse({
      status: 400,
      message: err.message
    });
  }
}

const login = async(req, res, next) => {
  const serverResponse = response(res);
  const { email, password } = req.body;

  if (!email || !password) {
    return serverResponse({
      status: 400,
      message: USER_PASSWORD_EMPTY
    });
  }
  
  try {
    const registeredUser = await Users.findOne({ email })
    if (registeredUser) {
      if (await bcrypt.compare(password, registeredUser.password)) {
        return serverResponse({ data: registeredUser });
      }

      return serverResponse({
        status: 400,
        message: USER_PASSWORD_WRONG
      });
    }

    return serverResponse({
      status: 400,
      message: USER_PASSWORD_WRONG
    });
  } catch (err) {

  }
}

module.exports = {
  signup,
  login
}
