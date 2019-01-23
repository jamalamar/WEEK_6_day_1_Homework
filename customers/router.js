let express = require('express')
let router = express.Router()


// Create-Customer
router.get('/:id', (request, response)=> {
  let id = request.params.id
  let customer = model.getCustomer(id)
  response.render('./customers', { customers, id })
})



module.exports = customerRouter