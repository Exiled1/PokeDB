/*
    SETUP
*/
var path = require('path');
// Express
var express = require('express');   // We are using the express library for the web server
var app     = express();            // We need to instantiate an express object to interact with the server in our code
PORT        = 9124;                 // Set a port number at the top so it's easy to change in the future
// Database
var db = require('./db-connector')

// Requirement paths.


app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, './'));
});






app.listen(PORT, ()=>{
    console.log("Server started on: " + PORT + " Ctrl-C To terminate connection.");
});