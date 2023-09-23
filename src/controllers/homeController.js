const router  = require('express').Router();
//! да не забравя да го експортна router


router.get('/', (req, res) => {
    res.render('home')
});


module.exports = router
