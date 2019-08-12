'use strict';
module.exports = (sequelize, DataTypes) => {
  const SchoolParameters = sequelize.define('SchoolParameters', {
    schoolYear: DataTypes.STRING,
    schoolName: DataTypes.STRING,
    schoolContact: DataTypes.STRING,
    schoolAddress1: DataTypes.STRING,
    schoolAddress2: DataTypes.STRING,
    schoolAddress3: DataTypes.STRING,
    schoolHeadMaster: DataTypes.STRING,
    studiesAdministrator: DataTypes.STRING,
    schoolDisciplineMaster: DataTypes.STRING,
    schoolCashier: DataTypes.STRING,
    schoolBankAccount: DataTypes.STRING,
    conductMarks: DataTypes.STRING,
    endOfYearDecision: DataTypes.STRING
  }, {});
  SchoolParameters.associate = function(models) {
    // associations can be defined here
  };
  return SchoolParameters;
};