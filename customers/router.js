let express = require('express')
let router = express.Router()


// Create-Customer
router.get('/:id', (request, response)=> {
  let id = request.params.id
  let customer = model.getCustomer(id)
  response.render('./customers', { customers, id })
})

// Get-Customer
router.post('/add-customer/', (request, response)=>{
  let newCustomer = request.body['new-customer']
  let customers = model.addCustomer(newCustomer)
  response.render('./customers', { customers })
})

// Update-Customer
router.post('/update-customer', (request, response)=> {
  let id = request.body['id']
  let newCustomer = request.body['new-customer']
  let customers = model.updateCustomer(id, newCustomer)
  response.render('./customers', { customers })
})

// Delete-Customer
router.post('/remove-customer', (request, response)=> {
  let customer = request.body['customer']
  let customers = model.deleteCustomer(customer)
  response.render('./customers', { customers })
})

module.exports = customerRouter