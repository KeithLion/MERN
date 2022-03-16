const Joke = require('../models/jokes.model')


module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then((allJokes)=> {
            res.json({jokes:allJokes})
        })
        .catch((err) => {
            res.json({message:'Something went wrong',error:err})
        })
}

module.exports.findOneJoke = (req,res) => {
    Joke.findOne({_id: req.param.id})
        .then((oneJoke) =>{
            res.json({jokes:oneJoke})
        })
        .catch((err) => {
            res.json({message:'Something went wrong',error:err})
        })
}

module.exports.createNewJoke = (req,res) => {
    Joke.create(req.body)
        .then(addNewJoke => {
            res.json({jokes:addNewJoke})
        })
        .catch((err) => {
            res.json({message:'Something went wrong'})
        })
}

module.exports.updateJoke = (req,res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:True, runValidator: True}
    )
        .then(updateJoke =>{
            res.json({jokes:updateJoke})
        })
        .catch((err) => {
            res.json({message:'Something went wrong'})
        })
}

module.exports.removeJoke = (req,res) => {
    Joke.deleteOne({_id:req.params.id})
        .then(result => {
            res.json({result:result})
        })
        .catch((err) => {
            res.json({message:'Something went wrong'})
        })
}