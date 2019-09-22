const express = require('express');
const app = express();

const meals = require('./routes/meals.js');
const cheap_meal = require('./routes/cheap-meals.js');
const large_meal = require('./routes/large-meals.js');
const meal = require('./routes/meal.js');
const reservations = require('./routes/reservations.js');
const reservation = require('./routes/reservation.js');

app.get('/', function (req, res) {
  res.send(
       `<a href="/meals">../meals</a><br />
        <a href="/cheap-meals">../cheap-meals</a><br />
        <a href="/large-meals">../large-meals</a><br />
        <a href="/meal">../meal</a><br />
        <a href="/reservations">../reservations</a><br />
        <a href="/reservation">../reservation</a><br />`
        );
});
app.get("/meals", meals);
app.get("/cheap-meals", cheap_meal);
app.get("/large-meals", large_meal);
app.get("/meal", meal);
app.get("/reservations", reservations);
app.get("/reservation", reservation);

app.listen(3000);
