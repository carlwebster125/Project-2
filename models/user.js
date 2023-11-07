"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Character, {
        as: "characters",
        through: models.UserCharacter,
        foreignKey: "userId",
        otherKey: "characterId",
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },{
    hooks:{
      async beforeCreate(user) {
        user.password = await bcrypt.hash(user.password,10);
      },
    },
    
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
