"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert(
      "PersonalInfos",
      [
        {
          firstName: "First1",
          lastName: "Last1",
          venmo: "@givememoney1",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          firstName: "First2",
          lastName: "Last2",
          venmo: "@givememoney2",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          firstName: "First3",
          lastName: "Last3",
          venmo: "@givememoney3",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          firstName: "First4",
          lastName: "Last4",
          venmo: "@givememoney4",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
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

    return queryInterface.bulkDelete("PersonalInfos", null, {});
  }
};
