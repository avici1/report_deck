'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SchoolParameters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      schoolYear: {
        type: Sequelize.STRING
      },
      schoolName: {
        type: Sequelize.STRING
      },
      schoolContact: {
        type: Sequelize.STRING
      },
      schoolAddress1: {
        type: Sequelize.STRING
      },
      schoolAddress2: {
        type: Sequelize.STRING
      },
      schoolAddress3: {
        type: Sequelize.STRING
      },
      schoolHeadMaster: {
        type: Sequelize.STRING
      },
      studiesAdministrator: {
        type: Sequelize.STRING
      },
      schoolDisciplineMaster: {
        type: Sequelize.STRING
      },
      schoolCashier: {
        type: Sequelize.STRING
      },
      schoolBankAccount: {
        type: Sequelize.STRING
      },
      conductMarks: {
        type: Sequelize.STRING
      },
      endOfYearDecision: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SchoolParameters');
  }
};