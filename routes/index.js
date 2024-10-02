const express = require('express')

const router = express.Router({ mergeParams: true })

router.use('/', require('./auth'))
router.use('/accounts', require('./account'))
router.use('/transactions', require('./transaction'))
router.use('/categories', require('./category'))

module.exports = router