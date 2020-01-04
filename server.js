const express = require("express");

/* Express App setup */

const app = express();
const PORT = process.env.PORT || 8080;

const db = require('./models');
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory
app.use(express.static("./public"));

// Start server to begin listening

//Change to db.sequelize.sync({ force: true }) to reset db for testing
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
