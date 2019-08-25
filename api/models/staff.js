'use strict';
module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define('Staff', {
    staffId: DataTypes.STRING,
    staffNames: DataTypes.STRING,
    staffTitle: DataTypes.STRING
  }, {});
  Staff.associate = function(models) {
    // associations can be defined here
  };
  return Staff;
};