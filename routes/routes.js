const router = require('express').Router();
const {homeController} = require('../controllers/home')

router.get('/', homeController)

module.exports = router