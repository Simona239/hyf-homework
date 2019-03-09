//GOODBOY-OLDBOY (A dog age calculator): 

var dogYearOfBirth = 2019; 
var dogYearFuture = 2030; 
var humanYear = dogYearFuture - dogYearOfBirth;
var dogYear = humanYear + 60; 
var shouldShowResultInDogYears;

if(shouldShowResultInDogYears===true){
   
    console.log ("Your dog will be " + dogYear + " dog years old in " + dogYearFuture + ".");
}
else{
    console.log("Your dog will be " + humanYear + " human years old in " + dogYearFuture + ".");
} 
