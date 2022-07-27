const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => {
  res.send('this is root!!!')
})

router.get('/products', controllers.getALLProducts)
router.get('/products/details/:id', controllers.findProductByid)
// router.get('/user/createuser', (req, res) => {
//   res.send(`getting...`)
// })
router.post('/user/createuser', controllers.createUser)
router.post('/finduser', controllers.findUser)
module.exports = router

