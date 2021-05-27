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


// To send back certain things you'll need to get the user's list of rows on their side.
app.get('/pokemon', async (req, res) => { // Request handled whenever a user sends a pokemon query.
    var data = makeFormFields(["pokedex_id","poke_name"],["Pokedex ID", "Pokemon Name"]);
    console.log(req.url);
    res.status(200).render("pokemon",{
        reqPath: req.url,
        field: data
    });

    console.log("Got a GET pokemon request");
});

app.post('/pokemon', async(req, res) =>{
    var data = makeFormFields(["pokedex_id","poke_name"],["Pokedex ID", "Pokemon Name"]);
    console.log("Recieved a pokemon query.");
    var sql = 'SELECT * FROM Pokemon WHERE pokedex_id = ? OR poke_name = ?'
    console.log(req.body);
    res.status(200).render("pokemon",{
        reqPath: req.url,
        words: Math.random() * 10,
        field: data
    });

});


app.listen(PORT, ()=>{
    console.log("Server started on port: " + PORT + " Ctrl-C To terminate connection.");
});

/**
 * You can make an object for the fields here, add any new data fields if you want.
 * @param {*} id 
 * @param {*} searchText 
 */
function Field(id, searchText){
    this.id = id;
    this.searchText = searchText;
}
/**
 * This is where the formFields are created.
 * @param {Array} idList 
 * @param {Array} textList 
 * @returns {Field} data
 */
function makeFormFields(idList, textList){
    var data = [];
    
    for (let i = 0; i < idList.length; i++) {
        console.log(idList[i])
        console.log(textList[i]);
        var newField = new Field(idList[i],textList[i]);
        data.push(newField)
        console.log(data);
    }
    return data;
}