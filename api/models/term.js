'use strict';
module.exports = (sequelize, DataTypes) => {
  const Term = sequelize.define('Term', {
    studentId: DataTypes.STRING,
    maxTj: DataTypes.INTEGER,
    tj: DataTypes.INTEGER,
    maxExam: DataTypes.INTEGER,
    exam: DataTypes.INTEGER
  }, {});
  Term.associate = function(models) {
    // associations can be defined here
  };
  return Term;
};