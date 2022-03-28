const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    firstName:{
        type:String, required: [true, minLength=2]
    },
    lastName:{
        type:String, required:[true, minLength=2]
    }
},{timestamp:true})

const Author = mongoose.model('Author',AuthorSchema)

module.exports = Author