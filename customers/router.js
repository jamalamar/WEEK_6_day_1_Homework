
let express = require('express')
let router = express.Router()


// Create-Customer
router.get('/:id', (req, res)=> {
  let id = req.params.id
  let customer = model.getCustomer(id)
  res.render('./customers', { customers, id })
})

// Get-Customer
router.post('/add-customer/', (req, res)=>{
  let newCustomer = req.body['new-customer']
  let customers = model.addCustomer(newCustomer)
  res.render('./customers', { customers })
})

// Update-Customer
router.post('/update-customer', (req, res)=> {
  let id = req.body['id']
  let newCustomer = req.body['new-customer']
  let customers = model.updateCustomer(id, newCustomer)
  res.render('./customers', { customers })
})

// Delete-Customer
router.post('/remove-customer', (req, res)=> {
  let customer = req.body['customer']
  let customers = model.deleteCustomer(customer)
  res.render('./customers', { customers })
})

