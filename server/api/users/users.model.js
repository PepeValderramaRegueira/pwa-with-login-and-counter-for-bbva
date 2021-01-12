const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const mongooseUniqueValidatorPluginConfig = {
  message: "Duplicated value '{PATH}' ({VALUE})"
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Missing field 'name'"]
  },
  surname: {
    type: String,
    required: [true, "Missing field 'surname'"]
  },
  email: {
    type: String,
    required: [true, "Missing field 'email'"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Missing field 'password'"]
  },
  lastLogin: {
    type: Number,
    required: false
  }
});

// Delete password and version from user's responses.
UserSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();
  
  delete userObject.password;
  delete userObject.__v;

  return userObject;
}

UserSchema.plugin(
  mongooseUniqueValidator,
  mongooseUniqueValidatorPluginConfig
);

module.exports = mongoose.model('Users', UserSchema);
