const db = require('../models');
const express = require('express');

const router = express.Router();

router.get('/api/user_info', function(req, res) {
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
    // console.log(result);
  });
});

//Find user info based off ID
router.get('/api/user_info/:id', (req, res) => {
  let query = {};
  if (req.query.user_id) {
    query.userId = req.query.user_id;
  }
  db.PersonalInfo.findOne({
    where: query,
    include: [db.User]
  }).then(result => {
    res.json(result);
    console.log(result);
  });
});


router.post('/api/user_info', (req, res) => {
  db.PersonalInfo.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    venmo: req.body.payment,
    height: req.body.height,
    weight: req.body.height,
    dob: req.body.DOB,
    gender: req.body.gender,
    userImage: req.body.profilePicture,
    UserId: req.body.userId
  }).then(result => {
    console.log('1 entry successfully added');
    res.json(result);
  });
});

router.put('/api/user_info', (req, res) => {
  console.log('************', req.body);
  db.PersonalInfo.update(
    {
      venmo: req.body.venmo,
      height: req.body.height,
      weight: req.body.weight,
      DOB: req.body.DOB,
      gender: req.body.gender,
      userImage: req.body.userImage,
      UserId: req.body.userId
    },
    {
      where: {
        userId: req.body.userId
      }
    }
  ).then(result => {
    console.log('1 entry edited successfully');
    res.json(result);
  });
});

module.exports = router;
