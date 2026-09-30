//arquivo de conexão com o banco
const {Sequelize} = require("sequelize") // importa o sequelize

const sequelize = new Sequelize(
    'biblioteca', // nome do banco
    'root', // senha
    '', // seha vazia
    {host:'locahost', dialect:'mysql', logging:false})

module.exports = sequelize