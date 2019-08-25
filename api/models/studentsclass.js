'use strict';
module.exports = (sequelize, DataTypes) => {
  const studentsClass = sequelize.define('studentsClass', {
    studentId: DataTypes.STRING,
    classId: DataTypes.STRING
  }, {});
  studentsClass.associate = function(models) {
    // associations can be defined here
  };
  return studentsClass;
};