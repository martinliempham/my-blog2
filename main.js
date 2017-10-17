'use strict'
var express = require('express');
var app = express();
var path = require('path');
// var PORT = process.env.PORT || 3000;
// app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.static('./public'))

// look for templates in my views folder otherwise look for templates in views folder
app.set('view engine','pug');
app.set('views','./my-views');
// '/'  is the default


app.get('/', function(request, response) {
  console.log('got request for "/hello/world"');    
  // response.send('hello there!');
  response.render('index')
});


app.get('/contact', function(request, response) {
  console.log('got request for "/hello/world"');    
  // response.send('hello there!');
  response.render('contact')
});


app.get('/about', function(request, response) {
  console.log('got request for "/hello/world"');    
  // response.send('hello there!');
  response.render('about')
});


app.get('/projects', function(request, response) {
  console.log('got request for "/hello/world"');    
  // response.send('hello there!');
  response.render('projects')
});


// app.listen(3000, function(){
//   console.log('App is listening on port 3000');
// })
app.listen(process.env.PORT || 3000, function() {
  console.log("Your server is available at localhost:3000!");
  });

app.get('*', function(request, response){
  response.status(404).send('page not found')
})

// app.use(express.static(path.join(__dirname, 'public')));