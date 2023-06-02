const router = require("express")
    .Router()
const controller = require('../index.js')

router
    .post('/', controller.createTask)

    .get('/', controller.getTasks)
module.export = router