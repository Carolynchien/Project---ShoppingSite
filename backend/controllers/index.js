const { Product } = require('../models')
const { User } = require('../models')

const getALLProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    console.log(products)
    res.json({ products })
  } catch (e) {
    return res.send(e.message)
  }
}

const findProductByid = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    console.log(product)
    if (product) {
      return res.json({ product })
    } else {
      return res.send(`this id is not exiting`)
    }
  } catch (e) {
    return res.send(e.message)
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = await new User(req.body)
    await newUser.save()
    console.log(newUser)
    res.send(`creating user data`)
  } catch (e) {
    return res.send(e.message)
  }
}

const findUser = async (req, res)=>{
  try{
    console.log('this is console',req.body);
    const user = await User.findOne(req.body)
    console.log(user);
    res.status(200).json(user)
  }catch(e) {
    return res.send(e.message)
  }
}

module.exports = { getALLProducts, findProductByid, createUser,findUser}
