const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// // --- Test ---
// const bListPkmn = pokémon.filter(p => p.name[0] === 'B');
// console.log(bListPkmn);
// const pkmnId = pokémon.map(p => p.id);
// console.log(pkmnId);

const pmIdDivBy3 = pokémon.filter(pid => pid.id % 3 === 0) // an array of pokémon objects where the id is evenly divisible by 3
console.log(pmIdDivBy3);

const pmFireType = pokémon.filter(type => type.types.includes("fire")); // an array of pokémon objects that are "fire" type
console.log(pmFireType);

const pmMultiTypes = pokémon.filter(type => type.types.length > 1); // an array of pokémon objects that have more than one type
console.log(pmMultiTypes);

const pmName = pokémon.map(pm => pm.name); // an array with just the names of the pokémon
console.log(pmName);

const pmNameId100Higher = pokémon.filter(pm => pm.id > 99).map(pm => pm.name); // an array with just the names of pokémon with an id greater than 99
console.log(pmNameId100Higher);

const pmNameTypePoison = pokémon.filter(pm => pm.types.includes("poison")).map(pm => pm.name); // an array with just the names of the pokémon whose only type is poison
console.log(pmNameTypePoison);

const pmSecondFly = pokémon.filter(pm => pm.types[1] === "flying").map(pm => pm.types[0]); // an array containing just the first type of all the pokémon whose second type is "flying"
console.log(pmSecondFly);

const countNormal = pokémon.filter(pm => pm.types.includes("normal")).length; // a count of the number of pokémon that are "normal" type
console.log(countNormal);