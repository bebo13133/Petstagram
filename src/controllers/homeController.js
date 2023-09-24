const router = require('express').Router();
const { log } = require('console')
//! да не забравя да го експортна router


router.get('/', (req, res) => {
  
    res.render('home')
});

router.get('/404', (req, res) => {
    res.render('404')
})
module.exports = router
