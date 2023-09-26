const router = require('express').Router();
const { log } = require('console')
const photoService = require('../services/photoService')

//! да не забравя да го експортна router


router.get('/', (req, res) => {
  
    res.render('home')
});

router.get('/profile', async (req, res) => {

    const photos = await photoService.getOwnerPhotos(req.user._id).lean();
    console.log(photos)
    res.render('profile', { photos, photoCount: photos.length})
})



router.get('/404', (req, res) => {
    res.render('404')
})
module.exports = router
