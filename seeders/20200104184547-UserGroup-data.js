'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert(
      'UserGroup',
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1,
          GroupId: 1
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2,
          GroupId: 1
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3,
          GroupId: 2
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4,
          GroupId: 2
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
    return queryInterface.bulkDelete('UserGroup', null, {});
  }
};
