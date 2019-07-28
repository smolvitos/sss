const express = require('express')
const router = express.Router()
const registerUser = require('../middleware/registerUser')


router.get('/', (req, res, next) => {
    res.render('register', { title: 'register' });
})

router.post('/', registerUser)
module.exports = router