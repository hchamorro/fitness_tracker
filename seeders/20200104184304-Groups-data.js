'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert(
      'Groups',
      [
        {
          name: 'Group1',
          duration: 111,
          prize: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Group2',
          duration: 222,
          prize: 200,
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

    return queryInterface.bulkDelete('Groups', null, {});
  }
};
