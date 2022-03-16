const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection'))
    .catch(err=> console.log('Connection failed',err))