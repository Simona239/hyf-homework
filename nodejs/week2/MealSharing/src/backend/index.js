const express = require('express');
const app = express();

app.use((req, res, next) => {
    const date = new Date();
    console.log(`${date} request received for path:${req.url}`);
    next();
  }); 

const meals = require("./routes/meals.js");
const meals_id = require("./routes/meals_id.js");
const reservation_by_id = require("./routes/reservation_by_id.js");
const reservations = require("./routes/reservations.js");
const review_by_id = require("./routes/review_by_id.js");
const reviews = require("./routes/reviews.js");

app.use("/meals", meals);
app.use("/meals", meals_id);
app.use("/reservations", reservation_by_id);
app.use("/reservations", reservations);
app.use("/reviews", review_by_id);
app.use("/reviews", reviews);
 
app.listen(3000, () => {
    console.log("Server is running");
  });