const db = require("../models");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.get("/api/user", (req, res) => {
  db.User.findAll({}).then(result => {
    res.json(result);
  });
});
//GET route for 1 user
router.get("/api/user/:id", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id
    }
  }).then(result => {
    res.json(result);
  });
});
//POST route to add a new user
router.post("/api/user", (req, res) => {
  bcrypt.hash(req.body.password, 8, (err, hash) => {
    console.log(hash);
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      db.User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: hash
      }).then(result => {
        console.log("1 entry successfully added");
        res.json(result);
      });
    }
  });
});
//DELETE route to delete user
// router.delete('/api/user/:id', (req, res) => {
//   db.User.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(result => {
//     console.log('1 entry deleted successfully');
//     res.json(result);
//   });
// });
//PUT route to edit user
router.put("/api/user", (req, res) => {
  db.User.update(
    {
      userName: req.body.userName
    },
    {
      where: {
        id: req.body.id
      }
    }
  ).then(result => {
    console.log("1 entry edited successfully");
    res.json(result);
  });
});

module.exports = router;
