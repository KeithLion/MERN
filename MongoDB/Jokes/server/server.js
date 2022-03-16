const express = require('express');
const app = express();
const port = 8000;
require('./config/jokes.config')

app.use(express.json(), express.urlencoded({extended:true}))

const AllJokeRoutes = require('./routes/jokes.route')
AllJokeRoutes(app)

app.listen(8000, () => console.log('The Server is ready to go'))