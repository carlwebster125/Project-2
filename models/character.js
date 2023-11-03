"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.belongsToMany(models.User, {
        through: models.UserCharacter,
        foreignKey: "characterId",
        otherKey: "userId",
      });
    }
  }
  Character.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      weakness: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Character",
    }
  );
  return Character;
};
