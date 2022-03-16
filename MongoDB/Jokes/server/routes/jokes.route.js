const JokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes)
    app.post('/api/jokes', JokeController.createNewJoke)
    app.put('/api/jokes/:_id',JokeController.updateJoke)
    app.get('/api/jokes/:_id',JokeController.findOneJoke)
    app.delete('/api/jokes/:_id', JokeController.removeJoke)
}