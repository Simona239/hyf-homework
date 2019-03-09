//EZ NAMEY (Startup name generator)

var firstWords = ["Cool", "Amazing", "Creative", "Decent", "Wild", "Splendid", "Adventurous", "Brilliant", "Curious", "Unique"] 
var secondWords = ["Habitat", "Place", "Venture", "Crowd", "People", "Spot", "Mind", "Journey", "Bunch", "Geeks"] 
var numberRandom = Math.floor(Math.random()*10) + 0;
var startupName = firstWords[numberRandom] + " " + secondWords[numberRandom]; 
var charactersNumber = firstWords[numberRandom].length + secondWords[numberRandom].length

console.log ("The startup name" + " \"" + startupName + "\" " + " contains " + charactersNumber + " characters" + ".")