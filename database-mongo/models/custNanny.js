const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const customerNannySchema = new mongoose.Schema({
  // your code here
  nanny_id: String,
  customer_id: String,
  date: { type: Date, default: Date.now }
});

//in order to run new collection, ctrl + C exit from server, and run npm start again.


const CustomerNanny = mongoose.model('CustomerNanny', customerNannySchema);

module.exports = CustomerNanny;