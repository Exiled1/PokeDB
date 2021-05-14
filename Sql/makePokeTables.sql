CREATE TABLE Types (
    pokedex_id int,
    type1 nvarchar(255),
    type2 nvarchar(255) NULL
);



CREATE TABLE Abilities(
    pokedex_id int PRIMARY KEY UNIQUE,
    ability1    nvarchar(255),
    ability2    nvarchar(255) NULL,
    ability3    nvarchar(255) NULL,
    ability4    nvarchar(255) NULL,
    ability5    nvarchar(255) NULL,
    hidden_abil nvarchar(255) NULL
);

CREATE TABLE Region(
    region_name nvarchar(255),
    origin_generation int
);

CREATE TABLE Pokemon(
    pokedex_id int PRIMARY KEY UNIQUE,
    poke_name nvarchar(255),
    classification nvarchar(255),
    height float,
    weight float,
    origin_generation int,
    PRIMARY KEY(pokedex_id)
);

CREATE TABLE TeamLink(
    pokedex_id int FOREIGN KEY,
    team_id int FOREIGN KEY
);

CREATE TABLE Team(
    team_id   int PRIMARY KEY UNIQUE AUTO_INCREMENT,
    team_name nvarchar(255) NULL,
    pokemon_1 int NULL,
    pokemon_2 int NULL,
    pokemon_3 int NULL,
    pokemon_4 int NULL,
    pokemon_5 int NULL,
    pokemon_6 int NULL,
);

-- Query for adding a new team composition with pokemon.
-- 

INSERT INTO Team (team_name, pokemon_1,pokemon_2, pokemon_3, pokemon_4, pokemon_5, pokemon_6)
VALUES ("Trainer Red Team", 006, 025, 003, 009, 143, 131);
