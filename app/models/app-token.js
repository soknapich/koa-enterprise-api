
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ApiToken = sequelize.define('ApiToken', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    tokenKeyName: DataTypes.STRING,
    tokenKeyValue: DataTypes.TEXT,
    expiryDate: DataTypes.DATE,
    apiUrls: DataTypes.TEXT,
    description: DataTypes.TEXT,
    isActive: DataTypes.BOOLEAN,
    isDeleted: DataTypes.BOOLEAN
  });

  return ApiToken;
};