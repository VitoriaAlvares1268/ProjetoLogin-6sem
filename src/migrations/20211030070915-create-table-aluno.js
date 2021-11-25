'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuario', 
    {
      id:{ 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowull: false
  },
  nome:{
    type: Sequelize.STRING,
    allowull: false,
  },
  email:{
    type: Sequelize.STRING,
    allowull: false,
  },
  senha:{
    type: Sequelize.STRING,
    allowull: false,
  },
  foto:{
    type: Sequelize.STRING,
    allowull: false,
  },
  createdAt:{
    type:Sequelize.DATE,
  },
  updatedAt:{
    type:Sequelize.DATE,
  }
 });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuario');
  }
};
