'use strict';
module.exports = (sequelize, DataTypes) => {
  const Term = sequelize.define('Term', {
    studentId: DataTypes.STRING,
    maxTj: DataTypes.STRING,
    tj: DataTypes.STRING,
    maxExam: DataTypes.STRING,
    exam: DataTypes.STRING
  }, {});
  Term.associate = function(models) {
    // associations can be defined here
  };
  return Term;
};