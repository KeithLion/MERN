const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    title:{
        type: String
    },
    price:{
        type: Number
    },
    description: {
        type: String
        }
}, {timestamp: true})

const Product = mongoose.model('Product',ProductsSchema)

module.exports = Product