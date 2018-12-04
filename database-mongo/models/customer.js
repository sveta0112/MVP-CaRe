const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const customerSchema = new mongoose.Schema({
  // your code here
  
  firstName: String,
  lastName: String,
  email: String,
  message: String,
  
});




const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;