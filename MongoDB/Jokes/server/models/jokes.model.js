const mongoose = require('mongoose');

const jokeSchema = mongoose.Schema({
    name: {
        type:String
    },
    age: {
        type: Number
    }
});

const Joke = mongoose.model('Joke',jokeSchema)
module.export = Joke 
