"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert("PersonalInfos", [
      {
        firstName: "tom",
        lastName: "pocius",
        height: "6",
        weight: "180",
        DOB: "1988-09-23",
        gender: "Girl",
        venmo: "@givememoney4",
        userImage: "Text.test",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
      {
        firstName: "tom",
        lastName: "pocius",
        height: "6",
        weight: "180",
        DOB: "1988-09-23",
        gender: "Girl",
        venmo: "@givememoney4",
        userImage: "Text.test",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
      },
      {
        firstName: "tom",
        lastName: "pocius",
        height: "6",
        weight: "180",
        DOB: "1988-09-23",
        gender: "Girl",
        venmo: "@givememoney4",
        userImage: "Text.test",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3
      },
      {
        firstName: "tom",
        lastName: "pocius",
        height: "6",
        weight: "180",
        DOB: "1988-09-23",
        gender: "Girl",
        venmo: "@givememoney4",
        userImage: "Text.test",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkDelete("PersonalInfos", null, {});
  }
};
