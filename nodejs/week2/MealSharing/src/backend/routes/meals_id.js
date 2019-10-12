const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/:id", (req, res) => {
const id = req.params.id;

var resultMeals;
const getById = meals.filter(meal => meal.id === +id);
  if (getById.length < 1) {
    resultMeals = "There is no such meal id";
  } else {
    resultMeals = getById;
  }
  res.send(resultMeals);
});

module.exports = router;