CREATE TABLE Types (
    pokedex_id int(11),
    type1 varchar(255),
    type2 varchar(255) NULL
);

CREATE TABLE Abilities(
    pokedex_id int(11) PRIMARY KEY,
    ability1    varchar(255),
    ability2    varchar(255) NULL,
    ability3    varchar(255) NULL,
    ability4    varchar(255) NULL,
    ability5    varchar(255) NULL,
    hidden_abil varchar(255) NULL
);

CREATE TABLE Region(
    region_name varchar(255),
    origin_generation int(11)
);

CREATE TABLE Pokemon(
    pokedex_id int(11) PRIMARY KEY,
    poke_name varchar(255),
    classification varchar(255),
    height float(11),
    weight float(11),
    origin_generation int(11)
);

CREATE TABLE TeamLink( 
    link_pokedex_id int(11),
    link_team_id int (11),
    fk_pokedex_id int(11) REFERENCES Pokemon(pokedex_id),
    fk_team_id int(11) REFERENCES Team(team_id)
);

CREATE TABLE Team(
    team_name varchar(255) NULL,
    team_id   int PRIMARY KEY AUTO_INCREMENT,
    pokemon_1 int(11) NULL,
    pokemon_2 int(11) NULL,
    pokemon_3 int(11) NULL,
    pokemon_4 int(11) NULL,
    pokemon_5 int(11) NULL,
    pokemon_6 int(11) NULL
);

-- Query for adding a new team composition with pokemon.
-- 
-- :eyes:
  var sql = "INSERT INTO Pokemon (pokedex_id, poke_name,classification,height,weight,origin_generation) VALUES (?,?,?,?,?,?) SELECT * FROM Pokemon;";

INSERT INTO Pokemon ()

"INSERT INTO Team (team_name, pokemon_1,pokemon_2, pokemon_3, pokemon_4, pokemon_5, pokemon_6)
VALUES (?, (SELECT pokedex_id from Pokemon where pokedex_id = ?, SELECT pokedex_id from Pokemon where pokedex_id = ?,SELECT pokedex_id from Pokemon where pokedex_id = ?, SELECT pokedex_id from Pokemon where pokedex_id = ?, SELECT pokedex_id from Pokemon where pokedex_id = ?, SELECT pokedex_id from Pokemon where pokedex_id = ?))
SELECT * from Team;";

SELECT (Pokemon.pokedex_id)
FROM Pokemon
WHERE

SELECT pokedex_id from Pokemon where pokedex_id = ?
"SELECT Pokemon.poke_name, Pokemon.pokedex_id, Pokemon.pokedex_id, Types.type1, Types.type2, Pokemon.classification, Pokemon.height, Pokemon.weight, Abilities.ability1, Abilities.hidden_abil FROM Abilities INNER JOIN Pokemon ON Abilities.pokedex_id=Pokemon.pokedex_id INNER JOIN Types ON Pokemon.pokedex_id=Types.pokedex_id WHERE Abilities.pokedex_id = " +
    randomPokemon;