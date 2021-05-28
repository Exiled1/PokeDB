/*
    SETUP
*/
var bodyParser = require("body-parser");
var path = require("path");
// Express
var express = require("express"); // We are using the express library for the web server
var exphbs = require("express-handlebars");
var app = express(); // We need to instantiate an express object to interact with the server in our code
PORT = 2486; // Set a port number at the top so it's easy to change in the future
// Database

var db = require("./db-connector");
var connection = db.pool;
const { resolve } = require("path");
const { rejects } = require("assert");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// Setup layout


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requirement paths.

app.get("/", async (req, res) => {
    
    res.status(200).render("homepage"); // Serve the page.
    console.log("Recieved GET from /");
});

// --------------- Pokemon ----------------------

// To send back certain things you'll need to get the user's list of rows on their side.
app.get("/pokemon", async (req, res) => {
    // Request handled whenever a user sends a pokemon query.

    var data = makeFormFields(
        ["pokedex_id", "poke_name"],
        ["Pokedex ID", "Pokemon Name"]
    );
    //console.log(req.url);
    res.status(200).render("pokemon", {
        reqPath: req.url,
        field: data,
    });

    console.log("Got a GET pokemon request");
});

app.post("/pokemon", async (req, res) => { // This one is the main one that works... Plz no touch.
    var data = makeFormFields(
        ["pokedex_id", "poke_name"],
        ["Pokedex ID", "Pokemon Name"]
    );

    var sql = "SELECT * FROM Pokemon WHERE pokedex_id=? OR poke_name=?;";
    //var sql2 = "SELECT * FROM Abilities;";
    var userParams = [];
    var pokeHead = [];
    var pokeVal = [];

    makeHeader(userParams, req.body);
    var sqlRes = await dbResponse(sql, userParams);

    makeTable(pokeHead, pokeVal, sqlRes);

    res.status(200).render("pokemon", {
        reqPath: req.url,
        headers: pokeHead,
        tableData: pokeVal,
        field: data,
    });

    console.log("Recieved a POST pokemon query.");
});

// --------------- Pokedex ----------------------

app.get("/pokedex", async (req, res) => {
    // Request handled whenever a user sends a pokemon query.
    var data = makeFormFields(
        ["pokedex_id", "poke_name"],
        ["Pokedex ID", "Pokemon Name"]
    );
    var insertData = makeFormFields(
        [
            "pokedex_id",
            "poke_name",
            "classification",
            "height",
            "weight",
            "origin_generation",
        ],
        [
            "Pokedex ID",
            "Pokemon Name",
            "Classification",
            "Height",
            "Weight",
            "Origin Generation",
        ]
    );
    console.log(req.url);
    res.status(200).render("pokedex", {
        reqPath: req.url,
        field: data,
        insertField: insertData,
    });

    console.log("Got a GET pokedex request");
});

app.post("/pokedex", async (req, res) => {
    var data = makeFormFields(
        ["pokedex_id", "poke_name"],
        ["Pokedex ID", "Pokemon Name"]
    );
    var insertData = makeFormFields(
        [
            "pokedex_id",
            "poke_name",
            "classification",
            "height",
            "weight",
            "origin_generation",
        ],
        [
            "Pokedex ID",
            "Pokemon Name",
            "Classification",
            "Height",
            "Weight",
            "Origin Generation",
        ]
    );

    // Use this sql query to get stuff from the database when it works.
    var sql = "SELECT * FROM Pokemon WHERE pokedex_id = ? OR poke_name = ?";
    console.log(req.body);
    res.status(200).render("pokedex", {
        reqPath: req.url,
        field: data,
        insertField: insertData,
    });
    console.log("Recieved a POST pokedex query.");
});

app.post("/pokedexInsert", async (req, res) => {
    console.log(
        "Recieved a POST request from Pokedex, Inserted a pokemon into the database from Pokedex."
    );
    console.log(req.body);
    var sql =
        "INSERT INTO Pokemon (pokedex_id, poke_name, classification, height, weight, origin_generation) VALUES (?, ?, ?, ?, ?, ?);";

    var data = makeFormFields(
        ["pokedex_id", "poke_name"],
        ["Pokedex ID", "Pokemon Name"]
    );

    var insertData = makeFormFields(
        [
            "pokedex_id",
            "poke_name",
            "classification",
            "height",
            "weight",
            "origin_generation",
        ],
        [
            "Pokedex ID",
            "Pokemon Name",
            "Classification",
            "Height",
            "Weight",
            "Origin Generation",
        ]
    );
    console.log(req.body);
    res.status(200).render("pokedex", {
        reqPath: "/pokedex",
        field: data,
        insertField: insertData,
        words: Math.random() * 10,
    });

    

});
app.put("/pokedex", async (req, res) => {
    console.log("Recieved an update request from Pokedex");
    var data = makeFormFields(
        ["pokedex_id", "poke_name"],
        ["Pokedex ID", "Pokemon Name"]
    );
    var sql = "UPDATE * FROM Pokemon WHERE pokedex_id = ? OR poke_name = ?";
    res.status(200).render("pokedex", {
        reqPath: req.url,
        field: data,
    });
});

app.delete("/pokedex", async (req, res) => {
    console.log(
        "Recieved a POST request from Pokedex, Inserted a pokemon into the database from Pokedex."
    );
    var sql =
        "INSERT INTO Pokemon (pokedex_id, poke_name, classification, height, weight, origin_generation) VALUES (?, ?, ?, ?, ?, ?);";

    var data = makeFormFields(
        ["pokedex_id", "poke_name"],
        ["Pokedex ID", "Pokemon Name"]
    );

    var insertData = makeFormFields(
        [
            "pokedex_id",
            "poke_name",
            "classification",
            "height",
            "weight",
            "origin_generation",
        ],
        [
            "Pokedex ID",
            "Pokemon Name",
            "Classification",
            "Height",
            "Weight",
            "Origin Generation",
        ]
    );
    res.status(200).render("pokedex", {
        reqPath: req.url,
        field: data,
        insertField: insertData,
        words: Math.random() * 10,
    });
});

// --------------- Regions ----------------------
app.get("/regions", async (req, res) => {
    // Request handled whenever a user sends a pokemon query.
    var data = makeFormFields(
        ["pokedex_id", "poke_name"],
        ["Pokedex ID", "Pokemon Name"]
    );
    console.log(req.url);
    res.status(200).render("regions", {
        reqPath: req.url,
        field: data,
    });

    console.log("Got a GET Region request");
});

app.post("/regions", async (req, res) => {
    var data = makeFormFields(
        ["pokedex_id", "poke_name"],
        ["Pokedex ID", "Pokemon Name"]
    );

    // Use this sql query to get stuff from the database when it works.
    var sql = "SELECT * FROM Pokemon WHERE pokedex_id = ? OR poke_name = ?";
    console.log(req.body);
    res.status(200).render("regions", {
        reqPath: req.url,
        words: Math.random() * 10,
        field: data,
    });

    console.log("Recieved a POST pokemon query.");
});

// --------------- Types ----------------------
app.get("/types", async (req, res) => {
    // Request handled whenever a user sends a pokemon query.
    var data = makeFormFields(
        ["pokedex_id", "poke_name"],
        ["Pokedex ID", "Pokemon Name"]
    );
    console.log(req.url);
    res.status(200).render("types", {
        reqPath: req.url,
        field: data,
    });

    console.log("Got a GET Types request");
});

app.post("/types", async (req, res) => {
    var data = makeFormFields(
        ["pokedex_id", "poke_name"],
        ["Pokedex ID", "Pokemon Name"]
    );
    console.log("Recieved a POST Types query.");

    // Use this sql query to get stuff from the database when it works.
    var sql = "SELECT * FROM Pokemon WHERE pokedex_id = ? OR poke_name = ?";
    console.log(req.body);
    res.status(200).render("types", {
        reqPath: req.url,
        words: Math.random() * 10,
        field: data,
    });
});
// --------------- Teams ----------------------

app.get("/teams", async (req, res) => {
    // Request handled whenever a user sends a pokemon query.
    var data = makeFormFields(
        ["team_id", "team_name", "poke_1", "poke_2"],
        ["Team ID", "Team Name", "Pokemon 1", "Pokemon 2"]
    );
    console.log(req.url);
    res.status(200).render("teams", {
        reqPath: req.url,
        field: data,
    });

    console.log("Got a GET Types request");
});

app.post("/teams", async (req, res) => {
    var data = makeFormFields(
        ["team_id", "team_name", "poke_1", "poke_2"],
        ["Team ID", "Team Name", "Pokemon 1", "Pokemon 2"]
    );

    // Use this sql query to get stuff from the database when it works.
    var sql = "SELECT * FROM Pokemon WHERE pokedex_id = ? OR poke_name = ?";
    console.log(req.body);
    res.status(200).render("teams", {
        reqPath: req.url,
        words: Math.random() * 10,
        field: data,
    });

    console.log("Recieved a POST Types query.");
});

app.put("/teams", async (req, res) => {
    console.log("Recieved a PUT request from Team");
});

// Whenever this part of the API gets called, we can delete a record, should usually give a correct ID of something.
app.delete("/teams:id", async (req, res) => {
    console.log("Recieved a DELETE request from Team");
});

// --------------- Team Links ----------------------
app.listen(PORT, () => {
    console.log(
        "Server started on port: " + PORT + " Ctrl-C To terminate connection."
    );
});

// --------------- Helper Functions ----------------------

/**
 * You can make an object for the fields here, add any new data fields if you want.
 * @param {String} id
 * @param {String} searchText
 */
function Field(id, searchText) {
    this.id = id;
    this.searchText = searchText;
}



/**
 * This is where the formFields are created.
 * @param {Array} idList
 * @param {Array} textList
 * @returns {Field} data
 */

function makeFormFields(idList, textList) {
    var data = [];
    for (let i = 0; i < idList.length; i++) {
        // console.log(idList[i]);
        // console.log(textList[i]);
        var newField = new Field(idList[i], textList[i]);
        data.push(newField);
        // console.log(data);
    }
    return data;
}

let dbResponse = async (query, args) => {
    //get the results of the query.

    let results = await new Promise((resolve, reject) =>
        connection.query(query,args, (err, results) => {
            if (err) {
                console.log("Database Request Failed");
                console.log(err);
                reject(err);
            } else {
                resolve(results);
            }
        })
    );
    console.log("Query Ready");

    return results;
};

let makeTable = function(pokeHead, pokeVal, sqlResObj){
    // If I don't get head from nurse joy, I will be depressed.
    // var Key = [];
    // var Value = [];
    // console.log(sqlResObj);
    pokeHead.push(...Object.keys(sqlResObj[0]));
    
    for (let i = 0; i < Object.keys(sqlResObj).length; i++) {
        const element = sqlResObj[i];
        // console.log(Object.values(element));
        pokeVal.push(Object.values(element));
    }

}

let makeHeader = function(arr, bodyReq){
    for (const property in bodyReq){
        arr.push(bodyReq[property]);
    }
}