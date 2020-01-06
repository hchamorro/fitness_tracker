const db = require("../models");
const express = require("express");

const router = express.Router();

router.get("/api/user_info", function(req, res) {
  let query = {};
  if (req.query.user_id) {
    query.userId = req.query.user_id;
  }
  // 1. Add a join here to include all of the User to the personal Info
  db.PersonalInfo.findAll({
    where: query,
    include: [db.User]
  }).then(function(result) {
    res.json(result);
  });
});

//GET route for personal info 1
router.get("/api/user_info/:id", (req, res) => {
  db.PersonalInfo.findOne({
    where: {
      id: req.params.id
    }
  }).then(result => {
    res.json(result);
  });
});

router.post("/api/user_info", (req, res) => {
  db.PersonalInfo.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    payment: req.body.payment,
    UserId: req.body.userId
  }).then(result => {
    console.log("1 entry successfully added");
    res.json(result);
  });
});

module.exports = router;
