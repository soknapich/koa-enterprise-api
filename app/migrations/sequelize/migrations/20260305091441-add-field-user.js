'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => Promise.all([
      queryInterface.addColumn('Users', 'email', {
        type: Sequelize.STRING(150),
        allowNull: true,           // email is required
        defaultValue: null            // default empty string for existing rows
      })
    ]));
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => Promise.all([
      queryInterface.removeColumn('Users', 'email')
    ]));
  }
};
