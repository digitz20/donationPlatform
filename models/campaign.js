'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      campaign.associate=(models)=>{
        campaign.hasOne(models.donation,{foreignKey:"campaignId",as:"donation"})
      }
      // define association here
    }
  }
  campaign.init({
    title: DataTypes.STRING,
    goalAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'campaign',
  });
  return campaign;
};