const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const SHA2 = require('sha2');

const userSchema = new mongoose.Schema({
  local:{
    name: String,
    lastName: String,
    email: String,
    password: String
  }
}) ;

userSchema.methods.hashingPassword = function(password){
  return SHA2.SHA256(password).toString('hex')
}

userSchema.methods.validatePassword = function(password){
  password = SHA2.SHA256(password).toString('hex')
  return password == (this.local.password)
}

module.exports = mongoose.model('User', userSchema);
