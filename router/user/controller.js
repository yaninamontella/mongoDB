const User = require('../../models/user')

const getAll = (req, res) => {
  User.find({}, (err, users) => {
    if (err) res.send({msg: 'Cant`t get the user list', error: err})
    res.send(users)
  })
}


const getById = (req, res) => {
 /* const paramId = Number(req.params.id)
  const query = { id:  { $eq: paramId } };
  User.findOne(query, (err, user) => {
    if (err) res.send({msg: 'Cant`t get the user', id:  req.params.id, error: err})
    res.send(user)
  })*/

  const paramId = Number(req.params.id)
  User.findById(paramId, (err, user) => {
    if (err) res.send({msg: `Cant't get the user ${paramId}`, error: err})
    res.send(user)
  })
}

const insert = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone
  })
  /*User.insertOne({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone
  })*/

  newUser.save((err) => {
    if (err) res.send({msg: 'Cant`t save the user', error: err})
    res.send('User saved')
  })
}

const upsert = (req, res) => {
  User.updateOne({_id: req.params.id}, {...req.body}, (err) => {
    if (err) res.send({msg: `Cant't upsert the user ${req.params.id}`, error: err})
    res.send('Upsert Successfully!')
  })
}

const update = (req, res) => {
  User.updateOne({_id: req.params.id}, {[Object.keys(req.body)]: req.body[Object.keys(req.body)]}, (err) => {
    if (err) res.send({msg: `Cant't update the user ${req.params.id}`, error: err})
    res.send('Upsert Successfully!')
  })
}

const remove = (req, res) => {
  User.deleteOne({_id: req.params.id}, (err) => {
    if (err) res.send({msg: `Cant't delete the user ${req.params.id}`, error: err})
    res.send('Delete Successfully!')
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