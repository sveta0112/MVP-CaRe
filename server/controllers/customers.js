const Customer = require('../../database-mongo/models/customer.js');


exports.getAll = (req, res) => {
  Customer.find({}, (err, result) => {
  	if(err){
  	  res.json(0);
  	} else {
  	  res.json(result);
  	}
  })
}

exports.add = (req, res) => {
  
  console.log('body', req.body.firstName);
  Customer.create(req.body).then(result => {
    res.send(result);
  })
}



 