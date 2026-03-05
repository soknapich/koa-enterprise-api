"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal("NEWID()") // ✅ SQL Server UUID auto
      },

      username: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

      role: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: "user"
      },

      refreshToken: {
        type: Sequelize.STRING,
        allowNull: true
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("GETDATE()")
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("GETDATE()")
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Users");
  }
};