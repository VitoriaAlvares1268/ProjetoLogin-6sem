const Sequelize = require("sequelize");
const dbConfig = require("../config/config.js");
const Usuario = require("../model/Usuario");
const Aluno = require("../model/Aluno");
const conexao = new Sequelize (dbConfig);


Usuario.init(conexao);
Aluno.init(conexao);
module.exports = conexao;

