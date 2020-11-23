const { async } = require('validate.js')
const Comments = require('../models/Article')

exports.addComments = async function (payload){
    const ins =    await Comments.create({

        })
    return ins.toJSON()
}