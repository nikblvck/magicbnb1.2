'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          userId: 1,
          spotId: 3,
          startDate: '2022-03-22 12:00:00',
          endDate: '2022-03-24 12:00:00',
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          userId: 2,
          spotId:4,
          startDate: '2022-03-22 12:00:00',
          endDate: '2022-03-24 12:00:00',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
