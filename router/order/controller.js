
const Order = require('../../models/order')

const getAll = (req, res) => {
  Order.find({}, (err, orders) => {
    if (err) res.send({msg: 'Cant`t get the order list', error: err})
    res.send(orders)
  })
}

const getById = (req, res) => {
  const query = { _id: req.params.id }
  Order.findOne(query, (err, order) => {
    if (err) res.send({msg: 'Cant`t get the order', id:  req.params.id, error: err})
    res.send(order)
  })
}

const insert = (req, res) => {
  const order = new Order({
    date: req.body.date,
    products: req.body.products,
    user: req.body.user,
    isActive: req.body.isActive,
  })

  order.save((err) => {
    if (err) res.send({msg: 'Cant`t save the order', error: err})
    res.send('Order added')
  })
}

const upsert  = (req, res) => {
  Order.updateOne({_id: req.params.id}, {...req.body}, (err) => {
    if (err) res.send({msg: `Cant't upsert the order`, id:  req.params.id, error: err})
    res.send('Upsert Successfully!')
  })
}

const update  = (req, res) => {
  Order.updateOne({_id: req.params.id}, {[Object.keys(req.body)]: req.body[Object.keys(req.body)]}, (err) => {
    if (err) res.send({msg: `Cant't update the order ${req.params.id}`, error: err})
    res.send('Order updated')
  })
}

const remove = (req, res) => {
  Order.deleteOne({_id: req.params.id}, (err) => {
    if (err) res.send({msg: `Cant't delete the order ${req.params.id}`, error: err})
    res.send('Order deleted')
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