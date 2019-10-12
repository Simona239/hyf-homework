const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/:id", (req, res) => {
const id = req.params.id;
const nrId = Number(id);

var resultReviews = reviews;
const getById = reviews.filter(meal => meal.meal_id === nrId);
  if (getById.length < 1) {
    resultReviews = "There is no such review id";
  } else {
    resultReviews = getById;
  }
res.send(resultReviews);
});

module.exports = router;