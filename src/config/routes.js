const homeController = require('../controllers/homeController')


module.exports = (app) => {
    //    const PORT = 5000
    app.use(homeController)

    app.get('*', (req, res) => {
        res.redirect('/404')
    })
}


