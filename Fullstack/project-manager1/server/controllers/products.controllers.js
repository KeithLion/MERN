const Product = require('../models/products.models')


module.exports = {
    createProduct: (req, res) => {
        console.log('create a product')
        console.log(req.body)
        Product.create(req.body)
            .then((newProduct) =>
                res.json(newProduct)
            )
            .catch((err)=>console.log(err))
    },
    findAllProducts: (req,res) => {
        Product.find()
            .then((allProducts)=> res.json(allProducts))
            .catch((err)=> console.log(err))
    },
    getOneProduct: (req,res) =>{
        Product.findOne({id:req.params.id})
            .then((oneProduct)=>res.json(oneProduct))
            .catch((err)=>console.log(err))
    },
        deleteOneProduct: (req,res) =>{
        Product.deleteOne({id:req.params.id})
            .then((deleteProduct)=>res.json(deleteProduct))
            .catch((err)=>console.log(err))
    },
    updateOneProduct: (req,res) => {
        Product.findByIdAndUpdate({_id: req.params.id},
            req.body,{
                new: true,
                runValidators: true
            })
            .then((editProduct)=> res.json(editProduct))
            .catch((err)=>console.log(err))
    }
}

