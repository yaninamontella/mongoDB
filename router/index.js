const express = require('express')
const user = require('./user')
const product = require('./product')
const order = require('./order')

const router =  express.Router()

router.use('/user', user)
router.use('/product', product)
router.use('/order', order)

module.exports = router