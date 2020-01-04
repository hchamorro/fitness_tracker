'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      'Posts',
      [
        {
          comment: 'Hello world 1',
          image: 'text.img 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment: 'Hello world 2',
          image: 'text.img 2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          comment: 'Hello world 3',
          image: 'text.img 3',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
