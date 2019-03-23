const mongoose = require('mongoose');

//const mongoURI = 'mongodb://localhost:27017/nanny';


const mongoURI = process.env.MONGODB_URI || 'mongodb://lana:lana1234@ds019866.mlab.com:19866/nanny';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });

module.exports = db;
