const express = require("express");
const router = express.Router();

const reviews = require("../data/reviews.json");

router.get("/", (req, res) => {
  res.send(reviews);
});

module.exports = router;