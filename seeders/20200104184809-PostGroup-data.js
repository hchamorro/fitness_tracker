'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      'PostGroup',
      [
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          PostId: 1,
          GroupId: 1
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          PostId: 2,
          GroupId: 1
        },
        {
          createdAt: new Date(),
          updatedAt: new Date(),
          PostId: 3,
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

    return queryInterface.bulkDelete('PostGroup', null, {});
  }
};
