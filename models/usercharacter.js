"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserCharacter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserCharacter.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },

      characterId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Characters",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "UserCharacter",
      timestamps: false,
    }
  );
  return UserCharacter;
};
