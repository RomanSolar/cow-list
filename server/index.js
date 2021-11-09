const express = require('express');
const path = require('path');
const Sequelize = require('sequelize');
var _ = require('underscore');

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(function(req, res, next) {
  var origin = req.headers.origin;
  if (_.contains(app.get('allowed_origins'), origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Origin', null);
  // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // console.log(res);
  next();
});

var seq =  require('../database/index.js');
var Cow = require('./models/cows.js');

app.use(express.static(path.join(__dirname, '..', '/public')));
app.use('/static', express.static(path.join(__dirname, '..', 'compiled/client/src')));


// get all cows
app.get('/api/cows', (req, res, next) => {

  var cows = Cow.getAll();
  cows.then((cows) => { 
    res.send(cows);
  }); 
})

// create new cow 
app.post('/api/cows', (req, res) => {
  var prom = Cow.create(req.body);
  prom.then(
    () => { res.send(req.body) }, 
    (error) => { res.send(error) }
    );
})

// app.get('/', (req, res) => {
//   //res.redirect();

// })

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});


