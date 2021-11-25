const{Model, DataTypes} = require ("sequelize");

class Aluno extends Model{
    static init(sequelize){
        super.init(
         {
             nome:DataTypes.STRING,
             turma:DataTypes.STRING,
             email:DataTypes.STRING,
             senha:DataTypes.STRING,
             foto:DataTypes.STRING,
         }, {sequelize, freezeTableName: true}
        );
    }
}
module.exports = Aluno;