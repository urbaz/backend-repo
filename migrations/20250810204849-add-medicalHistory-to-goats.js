module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('goats', 'medicalHistory', {
      type: Sequelize.JSON,
      allowNull: true,
      defaultValue: []
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('goats', 'medicalHistory');
  }
};
