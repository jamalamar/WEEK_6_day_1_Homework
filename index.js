
let express = require('express')
let app = express()


let customersRouter = require('./customers/router.js')
let app.use('/customers', customersRouter)


let productsRouter = require('./products/router.js')
let app.use('/products', productsRouter)