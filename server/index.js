var express = require('express');
var bodyParser = require('body-parser');
const nannies = require('./controllers/nannies.js');
const customers = require('./controllers/customers.js');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

const PORT = process.env.PORT || '3000';

var app = express();
app.use(bodyParser.json());
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get("/nannies", nannies.getAll);
app.get("/nannies/:location/:sitterType", nannies.getSearch);
app.post("/nannies", nannies.addNanny);

app.get("/customers", customers.getAll);
app.post("/customers", customers.add);
app.delete("/customers/:id", customers.removeCustomer);



app.listen(PORT, function() {
  console.log('listening on port 3000!');
});
