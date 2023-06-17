const router = require('express').Router();
const {homeController} = require('../controllers/home')
const {mangaDetailsController} = require('../controllers/mangaDetails')

router.get('/', homeController)

router.get('/manga/:id', mangaDetailsController)

module.exports = router