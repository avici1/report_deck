'use strict';
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    studentId: DataTypes.STRING,
    names: DataTypes.STRING
  }, {});
  Students.associate = function(models) {
    // associations can be defined here
  };
  return Students;
};