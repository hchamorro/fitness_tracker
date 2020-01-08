const express = require('express');
const exphbs = require('express-handlebars');
const db = require('./models');

const htmlRoute = require('./routes/html-routes');
const userApiRoute = require('./routes/user-api-routes');
const userInfoApiRoute = require('./routes/userInfo-api-routes');
const pathApiRoute = require('./routes/posts-api-routes');

/* Express App setup */

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static('./public'));
app.use('/uploads', express.static('uploads'));

// Routes

app.use(htmlRoute);
app.use(userApiRoute);
app.use(userInfoApiRoute);
app.use(pathApiRoute);

// Start server to begin listening

//Eventually change to this once we add sequalize/SQL database

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
