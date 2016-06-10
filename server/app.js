const express = require('express'),
      app = express(),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      national = require('./routes/national.js');

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// SET STATIC
app.use('/javascripts', express.static(__dirname+'/../client/javascripts'));
app.use('/stylesheets',express.static(__dirname+'/../client/stylesheets'));
app.use('/views',express.static(__dirname+'/../client/views'));
app.use('/api/national', national);
app.use('/resources', express.static(__dirname+'/../resources'));

// ROUTE
app.get('/', function(req,res){
  res.sendFile('layout.html',{root:'./client/views'})
})

app.get('*', function(req,res){
  res.sendFile('layout.html',{root:'./client/views'})
})


app.listen(3000, function(){
  console.log('Server is listen on port 3000');
})