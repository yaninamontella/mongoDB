const Product = require('../../models/product')

const getAll = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) res.send({msg: 'Cant`t get de product list', error: err})
    res.send(products)
  })
}

const getById = (req, res) => {
  const query = { _id: req.params.id }
  Product.findOne(query, (err, product) => {
    if (err) res.send({msg: 'Cant`t get the product', id:  req.params.id, error: err})
    res.send(product)
  })
}

const insert = (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    isVisible: req.body.isVisible,
    isActive: req.body.isActive,
  })

  product.save((err) => {
    if (err) res.send({msg: 'Cant`t save the product', id:  req.params.id, error: err})
    res.send('Product added')
  })
}

const upsert  = (req, res) => {
  Product.updateOne({_id: req.params.id}, {...req.body}, (err) => {
    if (err) res.send({msg: `Cant't upsert the product`, id:  req.params.id, error: err})
    res.send('Upsert Successfully!')
  })
}

const update  = (req, res) => {
  Product.updateOne({_id: req.params.id}, {[Object.keys(req.body)]: req.body[Object.keys(req.body)]}, (err) => {
    if (err) res.send({msg: `Cant't update the product`, error: err})
    res.send('Updated Successfully!')
  })
}

const remove = (req, res) => {
  Product.deleteOne({_id: req.params.id}, (err) => {
    if (err) res.send({msg: `Cant't delete the product`, error: err})
    res.send('Deleted Successfully!')
  }) 
}

module.exports = {
  getAll,
  getById,
  insert,
  upsert,
  update,
  remove
}