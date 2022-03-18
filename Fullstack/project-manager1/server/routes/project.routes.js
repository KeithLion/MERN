const ProjectController = require('../controllers/project.controllers')

module.export = (app) => {
    app.get('/api', ProjectController.index)
}