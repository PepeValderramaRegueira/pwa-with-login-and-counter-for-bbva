const bcrypt = require('bcrypt');
const Users = require('./../users/users.model');

const saveUserToDB = async(newUser) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUser.password, salt);
    newUser.password = hashedPassword;

    return newUserSaved = JSON.parse(JSON.stringify(
      await Users.create({
        ...newUser,
        lastLogin: Date.now()
      })
    ));
  } catch (err) {
    throw err;
  }
}

module.exports = {
  saveUserToDB
}
