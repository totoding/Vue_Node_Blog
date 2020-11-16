const sequelize = require("./db")
const {DataTypes} = require("sequelize")

const Article = sequelize.define("Article",{
    title : {
        type : DataTypes.STRING(255),
        allowNull: false,
    },
    content : {
        type : DataTypes.TEXT,
        allowNull : false,
    },
    tags : {
        type : DataTypes.STRING(255),    
    },
    author : {
        type : DataTypes.STRING(255),
    },
    views:{
       type : DataTypes.INTEGER(11) 
    }
},
{
    createdAt : true,
    updatedAt : true,
    paranoid : true
}
)

module.exports = Article