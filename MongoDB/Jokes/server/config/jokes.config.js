const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: True,
    useUnifiedTopology: True
})
    .then(() => console.log('Established a connection'))
    .catch(err=> console.log('Connection failed',err))