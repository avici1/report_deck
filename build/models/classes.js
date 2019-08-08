'use strict';

module.exports = function (sequelize, DataTypes) {
  var Classes = sequelize.define('Classes', {
    classYear: DataTypes.STRING,
    classId: DataTypes.STRING,
    classMasterTeacher: DataTypes.STRING,
    classSection: DataTypes.STRING,
    classLevel: DataTypes.STRING
  }, {});

  Classes.associate = function (models) {// associations can be defined here
  };

  return Classes;
};
//# sourceMappingURL=classes.js.map