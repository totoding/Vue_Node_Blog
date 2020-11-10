const sequelize = require("./db")
const {DataTypes} = require("sequelize")

const User = sequelize.define("User",{
    username : {
        type : DataTypes.STRING(255),
        allowNull: false,
    },
    password : {
        type : DataTypes.STRING(255),
        allowNull : false,
    },
    type : {
        type : DataTypes.INTEGER(11),    
    }
},
{
    createdAt : true,
    updatedAt : true,
    paranoid : true
}
)