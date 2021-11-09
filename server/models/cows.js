const { Sequelize, DataTypes, Model } = require('sequelize');
const path = require('path');
var seq =  require('../../database/index.js');

// seq auto pluralizes table
class Cow extends Model {}

Cow.init({
  // attributes
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,

  }, 
}, {
    // options
    tableName: 'Cows',
    sequelize: seq,
    timestamps: false,
});

// console.log(Cow === seq.models.Cow);

module.exports = {
  getAll: function () {
    return Cow.findAll();
  },
  
  create: function (specs) {
    return Cow.create(specs);
  }
};

