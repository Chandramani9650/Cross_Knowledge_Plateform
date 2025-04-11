const express = require('express');
const router = express.Router()
const {signup, signin, signout} = require('../controllers/authControllers')
const {identifier} = require('../middlewares/identification')

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/signout',identifier,signout)

module.exports = router