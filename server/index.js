var express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors");
//const nannies = require('./controllers/nannies.js');
//const customers = require('./controllers/customers.js');
const Nanny = require('../database-mongo/models/nanny.js');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');



var app = express();
const PORT = process.env.PORT || '3000';


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get("/nannies", (req, res) => {
  Nanny.find({}, (err, results) =>{
  	if(err){
  		res.json(0);
  	}else{
  		res.json(results);
  	}
  });
});


// app.get("/nannies/:location/:sitterType", nannies.getSearch);
// app.post("/nannies", nannies.addNanny);

// app.get("/customers", customers.getAll);
// app.post("/customers", customers.add);
// app.delete("/customers/:id", customers.removeCustomer);



app.listen(PORT, function() {
  console.log('listening on port 3000!');
});
