var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(req.body.burger_name, function (result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function (req, res) {
  burger.update(req.params.id, function (result) {
    console.log(result);
    res.sendStatus(200);
  });
});

// Export routes for server.js to use.
module.exports = router;
