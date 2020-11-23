const { async, result } = require("validate.js")
const { findAll } = require("../models/Article")
const Article = require("../models/Article")
const { Op } = require("sequelize")

exports.addArticle = async function (article){
    article.views = 0
    const ins = await Article.create(article)
    return ins.toJSON()
}

exports.getArticleById = async function (id){
    const result = await Article.findOne({
        where : {
            id,
        }
    })
    Article.update(
        {
            views : result.views += 1,  
        },
        {
            where:{
                id,
            }
        }
    )
    return result
}
exports.getArticleTitle = async function(){
    const result = await Article.findAll(
        {
            attributes: ['title', 'id',"tags", "createdAt"]
        }
    )
    return result 
}
exports.getArticleTitleByFilter = async function(fileter){
    if(fileter.type == "byTag"){
        const result = await Article.findAll({
            attributes: ['title', 'id',"tags", "createdAt"],
            where : {
                tags : {
                    [Op.like]: '%' + fileter.value+ "%", 
                }
            }
        })
        console.log(result)
        return result
    }else{
        const result = await Article.findAll({
            attributes: ['title', 'id',"tags", "createdAt"],
            where : {
                title : {
                    [Op.like]: '%' + fileter.value+ "%", 
                }
            }
        })
        return result
    }

 
}
exports.removeArticle = async function(id){
    const result = Article.destroy({
        where : {
            id
        }
    })
}

