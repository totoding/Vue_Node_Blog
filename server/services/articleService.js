const { async } = require("validate.js")
const Article = require("../models/Article")

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
    const includes = ['title', 'id']
    const result = await Article.findAll(
        {
            attributes: ['title', 'id',"tags", "createdAt"]
        }
    )
    console.log(result)
    return result 
}
exports.removeArticle = async function(id){
    const result = Article.destroy({
        where : {
            id
        }
    })
}