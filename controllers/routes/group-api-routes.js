const db = require('../../models');

//Routes

module.exports = function(app) {
  //GET route for all the users
  app.get('/api/group', (req, res) => {
    db.Group.findAll({}).then(result => {
      res.json(result);
    });
  });
  //GET route for 1 user
  app.get('/api/group/:id', (req, res) => {
    db.Group.findOne({
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.json(result);
    });
  });
  //POST route to add a new user
  app.post('/api/group', (req, res) => {
    db.Group.create({
      name: req.body.name,
      duration: req.body.duration,
      prize: req.body.prize
    }).then(result => {
      console.log('1 entry successfully added');
      res.json(result);
    });
  });
  //DELETE route to delete user
  app.delete('/api/group/:id', (req, res) => {
    db.Group.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => {
      console.log('1 entry deleted successfully');
      res.json(result);
    });
  });
  //PUT route to edit user
  app.put('/api/Group', (req, res) => {
    db.Group.update(
      {
        name: req.body.name,
        duration: req.body.duration,
        prize: req.body.prize
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
