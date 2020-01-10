"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          userName: "Tom",
          email: "tom@yahoo.com",
          password: "blank",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: "Sarah",
          email: "ilovecats@gmail.com",
          password: "blank",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: "James",
          email: "jdog2020@email.com",
          password: "blank",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userName: "Kevin",
          email: "homealone@sbcglobal.net",
          password: "blank",
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
    return queryInterface.bulkDelete("Users", null, {});
  }
};
