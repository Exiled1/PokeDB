/*
    SETUP
*/
var path = require('path');
// Express
var express = require('express');   // We are using the express library for the web server
var exphbs = requre('express-handlebars');
var app     = express();            // We need to instantiate an express object to interact with the server in our code
PORT        = 9124;                 // Set a port number at the top so it's easy to change in the future
// Database
var db = require('./db-connector')

// Setup layout
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Requirement paths.


app.get('/', async (req, res) => {
    res.status(200).render('homepage')
});






app.listen(PORT, ()=>{
    console.log("Server started on: " + PORT + " Ctrl-C To terminate connection.");
});