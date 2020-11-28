const sequelize = require("./db")
const {DataTypes} = require("sequelize")

const Comments = sequelize.define("Comments",{
    blogId : {
        type : DataTypes.INTEGER(11),
    },
    parentId : {
        type : DataTypes.INTEGER(11),
    },
    nickName : {
        type : DataTypes.STRING(255),    
    },
    content : {
        type : DataTypes.STRING(255),
    },
    commentId : {
        type : DataTypes.INTEGER(11),
    },
    replyNickName : {
        type : DataTypes.STRING(255),
    },
},
{
    createdAt : true,
    updatedAt : true,
    paranoid : true
}
)

module.exports = Comments