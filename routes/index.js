const express = require('express')

const router = express.Router({ mergeParams: true })

router.use('/', require('./auth'))
router.use('/accounts', require('./account'))
router.use('/transactions', require('./transaction'))

module.exports = router