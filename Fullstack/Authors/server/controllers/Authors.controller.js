const Author = require('../models/Authors.model')


module.exports = {
    createAuthor: (req, res) => {
        console.log('Added an Author')
        console.log(req.body)
        Product.create(req.body)
            .then((newAuthor) =>
                res.json(newAuthor)
            )
            .catch((err)=>console.log(err))
    },
    findAllAuthors: (req,res) => {
        Author.find()
            .then((allAuthors)=> res.json(allAuthors))
            .catch((err)=> console.log(err))
    },
    getOneAuthor: (req,res) =>{
        Author.findOne({_id:req.params.id})
            .then((oneAuthor)=>res.json(oneAuthor))
            .catch((err)=>console.log(err))
    },
        deleteOneAuthor: (req,res) =>{
        Author.deleteOne({_id:req.params.id})
            .then((deleteAuthor)=>res.json(deleteAuthor))
            .catch((err)=>console.log(err))
    },
    updateOneAuthor: (req,res) => {
        Author.findByIdAndUpdate({_id: req.params.id},
            req.body,{
                new: true,
                runValidators: true
            })
            .then((editAuthor)=> res.json(editAuthor))
            .catch((err)=>console.log(err))
    }
}