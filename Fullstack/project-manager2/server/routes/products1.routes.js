const ProductController = require('../controllers/products2.controllers')

module.exports = (app) =>{
    app.post('/api/products1', ProductController.createProduct)
    app.get('/api/products1', ProductController.findAllProducts)
    app.get('/api/products1/:id', ProductController.getOneProduct)
    app.delete('/api/products1/:id', ProductController.deleteOneProduct)
    app.put('/api/products1/update/:id', ProductController.updateOneProduct)
}