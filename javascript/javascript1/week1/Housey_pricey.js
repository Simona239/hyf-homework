//HOUSEY-PRICEY 

//Peter's house price situation:

var PeterHousePrice=2500000; 
var gardenSizeInM2 = 100;
var volumeInMeters = 8 * 10 * 10 //volumeInMeters = width * depth * height;
var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;


if (housePrice > PeterHousePrice) {
  console.log ("Peter is paying too much");
}

else {
  console.log("Peter is paying too little");
} 

//Julia's house price situation:

var JuliaHousePrice=1000000; 
var gardenSizeInM2 = 70;
var volumeInMeters = 5 * 11 * 8 //volumeInMeters = width * depth * height;
var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;


if (housePrice > JuliaHousePrice) {
  console.log ("Julia is paying too much.");
}

else {
  console.log("Julia is paying too little."); 
}  
