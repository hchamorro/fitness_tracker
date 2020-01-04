'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert(
      'PersonalInfos',
      [
        {
          firstName: 'First1',
          lastName: 'Last1',
          email: 'email1@email.com',
          birthDate: '1',
          birthMonth: '1',
          birthYear: '1111',
          height: '11',
          weight: '111',
          venmo: '@givememoney1',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 1
        },
        {
          firstName: 'First2',
          lastName: 'Last2',
          email: 'email2@email.com',
          birthDate: '2',
          birthMonth: '2',
          birthYear: '2222',
          height: '22',
          weight: '222',
          venmo: '@givememoney2',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2
        },
        {
          firstName: 'First3',
          lastName: 'Last3',
          email: 'email3@email.com',
          birthDate: '3',
          birthMonth: '3',
          birthYear: '3333',
          height: '33',
          weight: '333',
          venmo: '@givememoney3',
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 3
        },
        {
          firstName: 'First4',
          lastName: 'Last4',
          email: 'email4@email.com',
          birthDate: '4',
          birthMonth: '4',
          birthYear: '4444',
          height: '44',
          weight: '444',
          venmo: '@givememoney4',
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

    return queryInterface.bulkDelete('PersonalInfos', null, {});
  }
};
