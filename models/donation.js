'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      donation.associate=(models)=>{
        donation.belongsTo(models.campaign,{foreignKey:"campaignId",as:"campaign"})
      }
      // define association here
    }
  }
  donation.init({
    campaignId: {type : DataTypes.STRING, references:{model:"campaign", key: "id"} ,onUpdate: "CASCADE",
    onDelete: "CASCADE"},
    name : DataTypes.STRING,
    userId: {type : DataTypes.STRING, references:{model:"campaign", key: "id"} ,onUpdate: "CASCADE",
    onDelete: "CASCADE"},
    amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'donation',
  });
  return donation;
};