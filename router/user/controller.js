const users = require('../../data/users.json')

const getAll = (req, res) => {
    res.send(users)
}

const getById = (req, res) => {
    const paramId = Number(req.params.id)
    const result = users.find( ({id}) => id === paramId)  
    res.send(result)
}

const insert = (req, res) => { 
  const paramId = parseInt(req.body.id)
  let user= users.find( ({id}) => id === paramId) 
  if(user){
    res.status(404).send({message: 'The User Already exist'})
  }else{
    users.push(req.body)
    res.send({message: 'New user added' , data : users[paramId]})
    }
}

const upsert = (req, res) => {
  const paramId = parseInt(req.params.id)
  let user= users.find( ({id}) => id === paramId) 
  if(user){
    user = { ...req.body, id: paramId}
    res.send({message: 'Update Successfully!'});
  }else{
    res.status(404).send({message: 'User not found'})
    }
}

const update = (req, res) => {
  const user = users.find(user => user.id == req.params.id);
  if (user) {
    user[Object.keys(req.body)] = req.body[Object.keys(req.body)];
    res.send(user);
  }
  else {
    res.send('user doesn´t exist');
  }
}

const remove = (req, res) => {
  let paramId = parseInt(req.params.id)
  let index= users.findIndex(element => element.id==paramId)
  if(index===-1){
    res.status(404).send({message: 'User not found'})
  }else{
    users.splice(index, 1)
    res.send({message: 'Delete Successfully!'});
  }
}

module.exports = {
    getAll,
    getById,
    insert,
    upsert,
    update, 
    remove
}