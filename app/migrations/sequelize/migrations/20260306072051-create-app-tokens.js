'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ApiTokens', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING(255),
        allowNull: true
      },

      tokenKeyName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },

      tokenKeyValue: {
        type: Sequelize.TEXT, // nvarchar(max)
        allowNull: false
      },

      expiryDate: {
        type: Sequelize.DATE, // datetimeoffset equivalent
        allowNull: false
      },

      apiUrls: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },

      isActive: {
        type: Sequelize.BOOLEAN, // bit
        defaultValue: true
      },

      isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('GETDATE')
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('GETDATE')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ApiTokens');
  }
};