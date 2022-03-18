const mongoose = require('mongoose');

const jokeSchema = mongoose.Schema({
    setup: String,
    punchline:String
    },
    {timestamps:true}
);

const Joke = mongoose.model('Joke',jokeSchema)
module.export = Joke 
