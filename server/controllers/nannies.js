const Nanny = require('../../database-mongo/models/nanny.js');


exports.getAll = (req, res) => {
  Nanny.find({}, (err, result) => {
  	if(err){
  	  res.json(0);
  	} else {
  	  res.json(result);
  	}
  })
}

exports.getSearch = (req, res) => {
  var place = req.params.location;
  var stype = req.params.sitterType;

  if (place === "All" && stype === "All") {
    Nanny.find({}, (err, result) => {
      if (err) {
        res.json(0);
      } else {
        res.json(result);
      }
    });
  } else if (place === "All") {
    Nanny.find({ sitterType: stype }, (err, result) => {
      if (err) {
        res.json(0);
      } else {
        res.json(result);
      }
    });
  } else if (stype === "All") {
    Nanny.find({ location: place }, (err, result) => {
      if (err) {
        res.json(0);
      } else {
        res.json(result);
      }
    });
  } else {
    Nanny.find({ location: place, sitterType: stype }, (err, result) => {
      if (err) {
        res.json(0);
      } else {
        res.json(result);
      }
    });
  }
};
  
 
exports.addNanny = (req, res) => {
  Nanny.create(req.body).then(result => {
    res.send(result);
  })
}