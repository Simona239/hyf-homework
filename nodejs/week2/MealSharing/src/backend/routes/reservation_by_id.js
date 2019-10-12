const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/:id", (req, res) => {
  const id = req.params.id;
  
  var resultReservations = reservations;
  const getById = reservations.filter(meal => meal.mealId === +id);
  
  if (getById.length < 1) {
    resultReservations = "There is no such reservation id";
  } else {
    resultReservations = getById;
  }
  res.send(resultReservations);
});

module.exports = router;