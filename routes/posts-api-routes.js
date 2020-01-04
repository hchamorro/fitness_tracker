const db = require("../models");
const express = require("express");

const router = express.Router();

router.get("/api/posts", function(req, res) {
  console.log("contact!");
  let query = {};
  if (req.query.user_id) {
    query.UserId = req.query.user_id;
  }
  // 1. Add a join here to include all of the Users to these posts
  db.Post.findAll({
    where: query,
    include: [db.User]
  }).then(function(results) {
    let data = {
      posts: results
    };
    res.render("testpost", data);
    // res.json(dbPost);
  });
});

module.exports = router;
