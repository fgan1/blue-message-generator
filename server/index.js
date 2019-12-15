const express = require('express')
const PORT = 80;
const app = express();
const path = require('path');
const engines = require('consolidate');

app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/../frontend/'));
app.use(express.static(__dirname + '/../'));

app.get('/', function(req, res){
  res.render('index.html');
});

app.get('/joao/', function(req, res){
  res.render('./joao/index.html');
});

app.get('/fabio/', function(req, res){
  res.render('./fabio/index.html');
});

app.get('/yago/', function(req, res){
  res.render('./yago/index.html');
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))