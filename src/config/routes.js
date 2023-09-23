const homeController = require('../controllers/homeController')
const userController = require('../controllers/userController')

module.exports = (app) => {
    //    const PORT = 5000
    app.use(homeController)
    app.use('/users',userController)
    app.get('*', (req, res) => {
        res.redirect('/404')
    })
}


