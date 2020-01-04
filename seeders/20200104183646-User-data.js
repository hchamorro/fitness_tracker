'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          userName: 'Test1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'Test2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'Test3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: 'Test4',
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
