const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const nannySchema = new mongoose.Schema({
  // your code here
  //nanny_id: Number,
  firstName: String,
  lastName: String,
  email: String,
  location: String,
  hourlyRate: String,
  sitterType: String,
  // stars: {
  // 	type: Number,
  // 	min: 0,
  // 	max: 5,
  // },
  
  details: String,
  createdAt: {type: Date, default: Date.now},
});




const Nanny = mongoose.model('Nanny', nannySchema);

module.exports = Nanny;