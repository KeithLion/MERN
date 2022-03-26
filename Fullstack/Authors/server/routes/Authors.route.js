const AuthorController = require('../controllers/Authors.controller')


module.exports = (app) =>{
    app.post('/api/authors', AuthorController.createAuthor)
    app.get('/api/authors', AuthorController.findAllAuthors)
    app.get('/api/authors/:id', AuthorController.getOneAuthor)
    app.delete('/api/authors/:id', AuthorController.deleteOneAuthor)
    app.put('/api/authors/:id', AuthorController.updateOneAuthorS)
}