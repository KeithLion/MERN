const ProductController = require('../controllers/products.controllers')

module.exports = (app) =>{
    app.post('/api/products', ProductController.createProduct)
    app.get('/api/products', ProductController.findAllProducts)
    app.get('/api/products/:id', ProductController.getOneProduct)
    app.delete('/api/products/:id', ProductController.deleteOneProduct)
    app.put('/api/products/:id', ProductController.updateOneProduct)
}