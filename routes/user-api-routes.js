const db = require("../models");
const express = require("express");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const jwt = require("jsonwebtoken");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    //file rejected
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
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
router.post("/api/user", upload.single("userImage"), (req, res) => {
  console.log(req.file);
  db.User.findOne({
    where: {
      userName: req.body.userName
    }
  }).then(user => {
    if (user) {
      return res.status(409).json({
        message: "user name already exists"
      });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      db.User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: hash
        // userImage: req.file.path
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

router.post("/login", function(req, res) {
  db.User.findOne({
    where: {
      userName: req.body.userName
    }
  }).then(user => {
    let hash = user.password;

    bcrypt
      .compare(`${req.body.password}`, hash)
      .then(result => {
        // res === true
        console.log("hello world", result);
        if (result) {
          console.log("we did it!");
          const token = jwt.sign(
            {
              user: user.userName,
              userId: user.id
            },
            //key  make procees process.env.JWT_KEY
            "ftbrdky",
            {
              expiresIn: "1h"
            }
          );
          const url = window.location.search;
          if (url.indexOf("?user_id=") !== -1) {
            userId = url.split("=")[1];
          }
          let nextPage = `/home?user_id=${userId}?fttkn=${token}`;
          location.assign(nextPage);
          return res.status(200).json({
            message: "Auth successful",
            token: token
          });
        } else {
          return res.status(401).json({
            message: "Auth Fail"
          });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
});

module.exports = router;
