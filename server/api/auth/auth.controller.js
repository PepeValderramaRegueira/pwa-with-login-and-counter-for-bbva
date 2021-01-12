const { PASSWORDS_DONT_MATCH, PASSWORD_NOT_PROVIDED, USER_CREATED } = require('./../../utils/messages');
const { response } = require('./../../utils/responses');
const { saveUserToDB } = require('./../libs/users.lib');

const signup = async(req, res, next) => {
  const { password, repeatedPassword } = req.body;
  console.log('el req;', req.body);

  if (!password || !repeatedPassword) {
    return response({
      res,
      status: 400,
      message: PASSWORD_NOT_PROVIDED
    });
  }

  if (password !== repeatedPassword) {
    return response({
      res,
      status: 400,
      message: PASSWORDS_DONT_MATCH
    });
  }
  
  try {
    const newUser = await saveUserToDB(req.body);
    newUser.lastLogin = Date.now();

    return response({
      res,
      status: 201,
      message: USER_CREATED,
      data: {
        user: newUser
      }
    });
  } catch (err) {
    return response({
      res,
      status: 400,
      message: err.message
    });
  }
}

module.exports = {
  signup
}
