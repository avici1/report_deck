'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      classYear: {
        type: Sequelize.STRING
      },
      classId: {
        type: Sequelize.STRING
      },
      classMasterTeacher: {
        type: Sequelize.STRING
      },
      classSection: {
        type: Sequelize.STRING
      },
      classLevel: {
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
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Classes');
  }
};
//# sourceMappingURL=20190807072426-create-classes.js.map