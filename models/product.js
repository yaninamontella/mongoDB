const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: { type: String, required: true, max: 100},
  price: Number,
  stock: { type: Number, required: true, min: 0},
  isVisible: Boolean,
  isActive: Boolean
})

module.exports = mongoose.model('Product', ProductSchema)