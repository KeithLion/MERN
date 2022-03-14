const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/name_of_your_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Database Connected'))
    .catch(err => console.log('Something went wrong ', err));