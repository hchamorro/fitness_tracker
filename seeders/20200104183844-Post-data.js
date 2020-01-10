"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          comment: "Biceps and Triceps, all day everyday",
          image: "text.img 1",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          comment: "Cardio day",
          image: "text.img 2",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          comment: "Leg day",
          image: "text.img 3",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          comment: "7 days in a row at the gym! hell ya",
          image: "text.img 4",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4
        },
        {
          comment: "#last place forever",
          image: "text.img 5",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          comment: "down 2 sizes",
          image: "text.img 6",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          comment: "wedding season",
          image: "text.img 7",
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
    return queryInterface.bulkDelete("Posts", null, {});
  }
};
