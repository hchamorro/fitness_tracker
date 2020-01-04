const db = require('../../models');

//Routes

module.exports = function(app) {
  //GET route for all the users
  app.get('/api/user', (req, res) => {
    db.User.findAll({}).then(result => {
      res.json(result);
    });
  });
  //GET route for 1 user
  app.get('/api/user/:id', (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.json(result);
    });
  });
  //POST route to add a new user
  app.post('/api/user', (req, res) => {
    db.User.create({
      userName: req.body.userName
    }).then(result => {
      console.log('1 entry successfully added');
      res.json(result);
    });
  });
  //DELETE route to delete user
  app.delete('/api/user/:id', (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => {
      console.log('1 entry deleted successfully');
      res.json(result);
    });
  });
  //PUT route to edit user
  app.put('/api/user', (req, res) => {
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
      console.log('1 entry edited successfully');
      res.json(result);
    });
  });
};
