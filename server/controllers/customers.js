const Customer = require('../../database-mongo/models/customer.js');
const CustomerNanny = require('../../database-mongo/models/custNanny.js');

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
  
  console.log('nannyCustomer', req.body.nanny_id);
  //creates customer collection
  Customer.create(req.body).then(result => {
    var myObj = {nanny_id: req.body.nanny_id, customer_id: result._id};
    //creates customer-nanny collection, afet customer collection created
    CustomerNanny.create(myObj).then(result2 => {
      res.send(result2);
    })
    //res.send(result._id);
    
  })
}


exports.removeCustomer = (req, res) => {
  console.log('delete', req.params.id);
  Customer.findByIdAndDelete({_id:req.params.id}).then(removed => {
    res.send(removed);
  });
}


 