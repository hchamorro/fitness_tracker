const db = require('../models');
const express = require('express');

const router = express.Router();

// Get ALL posts based off query
router.get('/api/post', (req, res) => {
  let query = {};
  if (req.query.user_id) {
    query.UserId = req.query.user_id;
  }
  console.log(query);

  // 1. Add a join here to include all of the Users to these posts
  db.Post.findAll({
    where: query,
    include: [db.User]
  }).then(function(results) {
    res.json(results);
  });
});

//Find post based off ID
router.get('/api/post/:id', (req, res) => {
  db.Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(result => {
    res.json(result);
  });
});

//POST route to create post
router.post('/api/post', (req, res) => {
  db.Post.create({
    comment: req.body.comment,
    UserId: req.body.UserId,
    image: req.body.image
  }).then(result => {
    console.log('1 entry successfully added');
    res.json(result);
  });
});

//PUT route to edit post comment
router.put('/api/post', (req, res) => {
  db.Post.update(
    {
      comment: req.body.comment
    },
    {
      where: {
        id: req.body.id
      }
    }
  ).then(result => {
    console.log('1 entry edited successfully');
    res.json(result);
  });
});

router;

module.exports = router;
