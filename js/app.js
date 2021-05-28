// Function is here to 'pause' the system to ensure all data is recived
function wait(ms) {
    var currTime = new Date().getTime();
    while (currTime + ms >= new Date().getTime()) {}
}

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

// --------------- Pokemon ----------------------


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
   
    var sql = 'SELECT * FROM Pokemon WHERE pokedex_id = ? OR poke_name = ?;';
    var sql2 = 'SELECT * FROM Pokemon;';
    console.log(req.body);
    var sqlRes;
    db.pool.query(sql2, function(err, results, fields){
        console.log("This is the results lol: " + JSON.stringify(results));
        sqlRes = JSON.stringify(results);

        console.log("This is the thing: " + sqlRes);
        res.status(200).render("pokemon",{
            reqPath: req.url,
            words: sqlRes,
            field: data
        });
    })

    console.log("Recieved a POST pokemon query.");
});

// --------------- Pokedex ----------------------

app.get('/pokedex', async (req, res) => { // Request handled whenever a user sends a pokemon query.
    var data = makeFormFields(["pokedex_id","poke_name"],["Pokedex ID", "Pokemon Name"]);
    var insertData = makeFormFields(["pokedex_id","poke_name","classification","height","weight","origin_generation"],["Pokedex ID", "Pokemon Name", "Classification", "Height","Weight","Origin Generation"]);
    console.log(req.url);
    res.status(200).render("pokedex",{
        reqPath: req.url,
        field: data,
        insertField: insertData,
    });

    console.log("Got a GET pokedex request");
});

app.post('/pokedex', async(req, res) =>{
    var data = makeFormFields(["pokedex_id","poke_name"],["Pokedex ID", "Pokemon Name"]);
    var insertData = makeFormFields(["pokedex_id","poke_name","classification","height","weight","origin_generation"],["Pokedex ID", "Pokemon Name", "Classification", "Height","Weight","Origin Generation"]);

    // Use this sql query to get stuff from the database when it works.
    var sql = 'SELECT * FROM Pokemon WHERE pokedex_id = ? OR poke_name = ?'
    console.log(req.body);
    res.status(200).render("pokedex",{
        reqPath: req.url,
        field: data,
        insertField: insertData,
    });
    console.log("Recieved a POST pokedex query.");
});
app.post('/pokedexInsert', async(req, res) => {
    console.log("Recieved a POST request from Pokedex, Inserted a pokemon into the database from Pokedex.")
    var sql = 'INSERT INTO Pokemon (pokedex_id, poke_name, classification, height, weight, origin_generation) VALUES (?, ?, ?, ?, ?, ?);'

    
    var data = makeFormFields(["pokedex_id","poke_name"],["Pokedex ID", "Pokemon Name"]);
    
    var insertData = makeFormFields(["pokedex_id","poke_name","classification","height","weight","origin_generation"],["Pokedex ID", "Pokemon Name", "Classification", "Height","Weight","Origin Generation"]);
    res.status(200).render("pokedex",{
        reqPath: "/pokedex",
        field: data,
        insertField: insertData,
        words: Math.random() * 10
    });
    /*
        :userPId
        :userPName
        :userClass
        :userHeight
        :userWeight
        :userOriginGen
    */
});
app.put('/pokedex', async(req, res) =>{
    console.log("Recieved an update request from Pokedex")
    var data = makeFormFields(["pokedex_id","poke_name"],["Pokedex ID", "Pokemon Name"]);
    var sql = 'UPDATE * FROM Pokemon WHERE pokedex_id = ? OR poke_name = ?'
    res.status(200).render("pokedex",{
        reqPath: req.url,
        field: data
    });
});



// --------------- Regions ----------------------
app.get('/regions', async (req, res) => { // Request handled whenever a user sends a pokemon query.
    var data = makeFormFields(["pokedex_id","poke_name"],["Pokedex ID", "Pokemon Name"]);
    console.log(req.url);
    res.status(200).render("regions",{
        reqPath: req.url,
        field: data
    });

    console.log("Got a GET Region request");
});

app.post('/regions', async(req, res) =>{
    var data = makeFormFields(["pokedex_id","poke_name"],["Pokedex ID", "Pokemon Name"]);
    

    // Use this sql query to get stuff from the database when it works.
    var sql = 'SELECT * FROM Pokemon WHERE pokedex_id = ? OR poke_name = ?'
    console.log(req.body);
    res.status(200).render("regions",{
        reqPath: req.url,
        words: Math.random() * 10,
        field: data
    });

    console.log("Recieved a POST pokemon query.");
});

// --------------- Types ----------------------
app.get('/types', async (req, res) => { // Request handled whenever a user sends a pokemon query.
    var data = makeFormFields(["pokedex_id","poke_name"],["Pokedex ID", "Pokemon Name"]);
    console.log(req.url);
    res.status(200).render("types",{
        reqPath: req.url,
        field: data
    });

    console.log("Got a GET Types request");
});

app.post('/types', async(req, res) =>{
    var data = makeFormFields(["pokedex_id","poke_name"],["Pokedex ID", "Pokemon Name"]);
    console.log("Recieved a POST Types query.");

    // Use this sql query to get stuff from the database when it works.
    var sql = 'SELECT * FROM Pokemon WHERE pokedex_id = ? OR poke_name = ?'
    console.log(req.body);
    res.status(200).render("types",{
        reqPath: req.url,
        words: Math.random() * 10,
        field: data
    });
});
// --------------- Teams ----------------------

app.get('/teams', async (req, res) => { // Request handled whenever a user sends a pokemon query.
    var data = makeFormFields(["team_id","team_name","poke_1","poke_2"],["Team ID", "Team Name","Pokemon 1", "Pokemon 2"]);
    console.log(req.url);
    res.status(200).render("teams",{
        reqPath: req.url,
        field: data
    });

    console.log("Got a GET Types request");
});

app.post('/teams', async(req, res) =>{
    var data = makeFormFields(["team_id","team_name","poke_1","poke_2"],["Team ID", "Team Name","Pokemon 1", "Pokemon 2"]);
    

    // Use this sql query to get stuff from the database when it works.
    var sql = 'SELECT * FROM Pokemon WHERE pokedex_id = ? OR poke_name = ?'
    console.log(req.body);
    res.status(200).render("teams",{
        reqPath: req.url,
        words: Math.random() * 10,
        field: data
    });

    console.log("Recieved a POST Types query.");
});

app.put('/teams', async(req, res) =>{
    console.log("Recieved a PUT request from Team");
});

// Whenever this part of the API gets called, we can delete a record, should usually give a correct ID of something.
app.delete('/teams:id', async(req, res) =>{
    console.log("Recieved a DELETE request from Team");
});

// --------------- Team Links ----------------------
app.listen(PORT, ()=>{
    console.log("Server started on port: " + PORT + " Ctrl-C To terminate connection.");
});


// --------------- Helper Functions ----------------------

/**
 * You can make an object for the fields here, add any new data fields if you want.
 * @param {String} id 
 * @param {String} searchText 
 */
function Field(id, searchText){
    this.id = id;
    this.searchText = searchText;
}

function Pokemon(){}


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