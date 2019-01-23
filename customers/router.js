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



module.exports = customerRouter