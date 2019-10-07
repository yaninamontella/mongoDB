const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
  id: Schema.Types.ObjectId,
  date: { type: Date, default: Date.now},
  products: [{ type: Schema.Types.ObjectId, ref: 'Product'}],
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  isActive: Boolean
})

module.exports = mongoose.model('Order', OrderSchema)