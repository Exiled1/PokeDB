/*
    SETUP
*/
var bodyParser = require("body-parser");
var path = require('path');
// Express
var express = require('express');   // We are using the express library for the web server
var exphbs = require('express-handlebars');
var app     = express();            // We need to instantiate an express object to interact with the server in our code
PORT        = 9124;                 // Set a port number at the top so it's easy to change in the future
// Database

var db = require('./db-connector')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// Setup layout
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Requirement paths.


app.get('/', async (req, res) => {
    res.status(200).render("homepage"); // Serve the page.
    console.log("Recieved GET from /");
});



app.get('/pokemon', async (req, res) => { // Request handled whenever a user sends a pokemon query.
    
    res.status(200).render("pokemon");
    console.log("Got a GET pokemon request");
});



app.listen(PORT, ()=>{
    console.log("Server started on port: " + PORT + " Ctrl-C To terminate connection.");
});