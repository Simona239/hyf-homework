// removes a random number from the array
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomNumber = parseInt(Math.random() * 11);
const randomNumRemove = numbersArray.splice (randomNumber, 1);
console.log (randomNumRemove);
console.log (numbersArray); 

