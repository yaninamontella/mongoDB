const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: { type: String, required: true, max: 100},
  email: { type: String, required: true, max: 100},
  password: { type: String, required: true},
  phone: { type: String, required: true, max: 25}
})

module.exports = mongoose.model('User', UserSchema)