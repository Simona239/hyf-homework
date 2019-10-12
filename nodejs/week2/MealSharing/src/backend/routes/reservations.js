const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", (req, res) => {
  res.send(reservations);
});

module.exports = router;