//Spirit animal name generator
const spiritAnimal = ["The Multitasking Octopus", "The Wise Owl", "The Confident Toucan", "The Crazy Squirrel", "The Lazy Slough", "The Fragile Butterfly", "The Grumpy Cat", "The Noisy Racoon", "The Sneaky Fox", "The Adorable Panda"]

function getSpiritAnimalName() {
    let name = document.getElementById("name").value; 
    if(name === "") {
        alert ("Enter your name");
    } else {
        let randomNr = Math.floor(Math.random() * 10);
        let yourSpiritAnimal = spiritAnimal[randomNr];
        let outcome = document.getElementById("spirit_animal");
        outcome.innerHTML = name + "," + " your spirit animal: " + yourSpiritAnimal; 
        outcome.style.color="rgb(50, 190, 120)";
        outcome.style.fontSize = "20px";
    }
} 
