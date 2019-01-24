
let express = require('express')
let router = express.Router()


// Create-Customer
router.get('/:id', (req, res)=> {
  let id = req.params.id
  let product = model.getProduct(id)
  res.render('./products', { products, id })
})

// Get-Customer
router.post('/add-product/', (req, res)=>{
  let newProduct = req.body['new-product']
  let products = model.addCustomer(newProduct)
  res.render('./products', { products })
})

// Update-Customer
router.post('/update-product', (req, res)=> {
  let id = req.body['id']
  let newProduct = req.body['new-product']
  let products = model.updateProduct(id, newProduct)
  res.render('./products', { products })
})

// Delete-Customer
router.post('/remove-product', (req, res)=> {
  let product = req.body['product']
  let products = model.deleteProduct(product)
  res.render('./products', { products })
})

