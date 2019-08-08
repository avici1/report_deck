'use strict';
module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
    classYear: DataTypes.STRING,
    classId: DataTypes.STRING,
    classMasterTeacher: DataTypes.STRING,
    classSection: DataTypes.STRING,
    classLevel: DataTypes.STRING
  }, {});
  Classes.associate = function(models) {
    // associations can be defined here
  };
  return Classes;
};