
-- Inserts stuff into a team.

INSERT INTO Team (team_name, pokemon_1,pokemon_2,pokemon_3,pokemon_4,pokemon_5,pokemon_6)
VALUES (:teamNameInput, :pokemon_1_input, :pokemon_2_input, :pokemon_3_input, :pokemon_4_input, :pokemon_5_input, :pokemon_6_input);

-- POKEDEX STUFF to insert into the pokemon table.

INSERT INTO Pokemon (pokedex_id, poke_name, classification, height, weight, origin_generation)
VALUES (:userPId, :userPName, :userClass, :userHeight, :userWeight, :userOriginGen);

UPDATE Pokemon
SET 
-- Pokemon search query, user can search for a pokemon by ID# or by their name, although ID# is preferred since a pokemon could be known by a different name.

SELECT * 
FROM Pokemon 
WHERE pokedex_id = :userIDSearch OR poke_name = :pokeNameSearch;



-- Pokemon Abilities search query.

SELECT *
FROM Abilities
WHERE (
    pokedex_id  = :userIDSearch     OR
    ability1    = :userAbilityInput OR
    ability2    = :userAbilityInput OR
    ability3    = :userAbilityInput OR
    ability4    = :userAbilityInput OR
    ability5    = :userAbilityInput OR
    hidden_abil = :userAbilityInput
); 

-- Types table search query.

SELECT *
FROM Types
WHERE (
    pokedex_id  = :userIDSearch     OR
    type1       = :userType1Search  OR   
    type1       = :userType1Search  OR
);

-- Query for Regions based off of their names or their origin generation.
SELECT *
FROM Region
WHERE (
    region_name = :regionSearch OR
    origin_generation = :originSearch
);

-- Team search for any team with a certain team name, ID, or you can search for teams that have specific pokemon in their formation.
SELECT *
FROM Team
WHERE (
    team_id   = :userTeamIDSearch      OR
    team_name = :userTeamSearch        OR
    pokemon_1_ID = :userPokeSearch_1   OR
    pokemon_2_ID = :userPokeSearch_2   OR
    pokemon_3_ID = :userPokeSearch_3   OR
    pokemon_4_ID = :userPokeSearch_4   OR
    pokemon_5_ID = :userPokeSearch_5   OR
    pokemon_6_ID = :userPokeSearch_6
);

-- Get a team's ID, Name, and Pokemon names based on the teams name or their team ID.

SELECT Team.team_id AS "Team ID", Team.team_name AS "Team Name", Pokemon.poke_name AS "Pokemon Name"
FROM Team, Pokemon
WHERE (
    Team.team_name = :userTeamSearch OR 
    Team.team_id = :userTeamIDSearch OR
    Team.pokemon_1_ID = Pokemon.pokedex_id OR
    Team.pokemon_2_ID = Pokemon.pokedex_id OR
    Team.pokemon_3_ID = Pokemon.pokedex_id OR
    Team.pokemon_4_ID = Pokemon.pokedex_id OR
    Team.pokemon_5_ID = Pokemon.pokedex_id OR
    Team.pokemon_6_ID = Pokemon.pokedex_id
);

-- RIGHT JOIN Pokemon
--     ON Team.pokemon_1_ID = Pokemon.pokedex_id
-- RIGHT JOIN Pokemon
--     ON Team.pokemon_2_ID = Pokemon.pokedex_id
-- RIGHT JOIN Pokemon
--     ON Team.pokemon_3_ID = Pokemon.pokedex_id
-- RIGHT JOIN Pokemon
--     ON Team.pokemon_4_ID = Pokemon.pokedex_id
-- RIGHT JOIN Pokemon
--     ON Team.pokemon_5_ID = Pokemon.pokedex_id
-- RIGHT JOIN Pokemon
--     ON Team.pokemon_6_ID = Pokemon.pokedex_id
-- Team.pokemon_2_ID =    :poke2ID OR
-- Team.pokemon_3_ID =    :poke3ID OR
-- Team.pokemon_4_ID =    :poke4ID OR
-- Team.pokemon_5_ID =    :poke5ID OR
-- Team.pokemon_6_ID =    :poke6ID 