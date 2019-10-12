const express = require("express");
const router = express.Router();

const meals = require('../data/meals.json');

var resultMeals = meals;

router.get ('/', (req, res, next)=>{
const requestedParameters = {
     maxPrice: req.query.maxPrice,
     title: req.query.title,
     date: req.query.date,
     limit: req.query.limit
   }
  
   if (requestedParameters.maxPrice){
    resultMeals = meals.filter(meal => meal.price < requestedParameters.maxPrice);
   }
  
   if (requestedParameters.title){
    resultMeals = meals.filter(meal =>meal.title.toLowerCase().trim().split(" ").join("") === requestedParameters.title.toLowerCase().trim());
   }
   
   if (requestedParameters.date){
    resultMeals = meals.filter(meal =>{         
      return Date.parse(meal.createdAt) > Date.parse(requestedParameters.date) ;
   });
   } 
  
   if (requestedParameters.limit){
    resultMeals = meals.slice(0, requestedParameters.limit);
    console.log(resultMeals.length);
   }
   if(resultMeals.length < 1){
    res.status(400).send("<h1>bad request!</h1>");   
  }
  
res.send (resultMeals);
 
});

module.exports = router;