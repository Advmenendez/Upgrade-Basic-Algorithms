
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let avenger = avengers[0];
console.log(avenger);

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let avenger = avengers[0] = "IRONMAN"
console.log(avengers)

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let number = avengers.length
console.log(number) 


const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty','Summer');
console.log(rickAndMortyCharacters)

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
rickAndMortyCharacters.splice(1,3);
console.log(rickAndMortyCharacters);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; 
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);