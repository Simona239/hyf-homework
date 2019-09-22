//random meal
const express = require('express');
const router = express.Router();
const meals = require('../data/meals.json');
const reservations = require('../data/reservations.json');

router.get('/meal', function (req, res) {
    const random_meal = meals[Math.floor(Math.random() * meals.length)];

    let meal = '';
    let email_list = reservations
    .filter(reservation => reservation.mealId = random_meal.id)
    .map(item => item.email);

    let email_string = email_list.join(', ');
    
    if (email_string === '') {
        meal = random_meal.title;
    }
    else { 
        meal = `${random_meal.title}: ${email_string}`;
    }   

    res.json(meal);
});

module.exports = router;