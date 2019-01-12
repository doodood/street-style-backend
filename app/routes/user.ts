module.exports = (router) => {

    const userController = require('./../controllers/user');

    router.get('/getAll', userController.getAll)
}