const { Sequelize } = require("sequelize")
const sequelize =  new Sequelize('vue_blog', 'root', 'Hny158405', {
    host: '111.229.70.166',
    dialect: 'mysql',
    logging: console.log
})
module.exports = sequelize