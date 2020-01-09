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
          updatedAt: new Date(),
          UserId: 1
        },
        {
          comment: 'Hello world 2',
          image: 'text.img 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          comment: 'Hello world 3',
          image: 'text.img 3',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          comment: 'Hello world 4',
          image: 'text.img 4',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          comment: 'Hello world 5',
          image: 'text.img 5',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          comment: 'Hello world 6',
          image: 'text.img 6',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          comment: 'Hello world 7',
          image: 'text.img 7',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
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
