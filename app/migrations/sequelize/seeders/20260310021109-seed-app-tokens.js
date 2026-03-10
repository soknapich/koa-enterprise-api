'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ApiTokens', [
      {
        id: '2D6C493E-03B3-451D-9073-E78F93246383',
        name: 'Internal API',
        tokenKeyName: 'x-access-token',
        tokenKeyValue: 'bY4JsQAKgjj3aCJmTW6cDfwKCXnBdisH54LLcLpwbaf6r37yCXgSoftMex9LZGDKbm7Tr7pdwAs89mJrD7d5nXjHbwUmAFDsxDAUwgYjYikjCP9bwuqwuzcSCqMJ3Q8v',
        expiryDate: '2026-03-10 15:02:39.0000000 +00:00',
        apiUrls: '[{"method":"get","url":"/api/user/get-one/:param"},{"method":"get","url":"/api/user/get-all"}]',
        description: 'Token for internal service communication',
        isActive: true,
        isDeleted: false
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ApiTokens', null, {});
  }
};
