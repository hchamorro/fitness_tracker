const express = require('express');

/* Express App setup */

const app = express();
const PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory
app.use(express.static('./public'));

// Routes
require('./controllers/routes/html-routes')(app);
// Start server to begin listening

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});

//Eventually change to this once we add sequalize/SQL database
/*
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
*/
