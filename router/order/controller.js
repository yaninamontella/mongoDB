const getAll = (req, res) => {
    res.send(orders)
}

const getById = (req, res) => {
    const paramId = Number(req.params.id)
    const result = orders.find( ({id}) => id === paramId)  
    res.send(result)
}

const insert = (req, res) => { 
  const paramId = parseInt(req.body.id)
  let order= orders.find( ({id}) => id === paramId) 
  if(order){
    res.status(404).send({message: 'The order Already exist'})
  }else{
    orders.push(req.body)
    res.send({message: 'New order added' , data : orders[paramId]})
    }
}

const upsert = (req, res) => {
  const paramId = parseInt(req.params.id)
  let order= orders.find( ({id}) => id === paramId) 
  if(order){
    order = { ...req.body, id: paramId}
    res.send({message: 'Update Successfully!'});
  }else{
    res.status(404).send({message: 'order not found'})
    }
}

const update = (req, res) => {
  const order = orders.find(order => order.id == req.params.id);
  if (order) {
    order[Object.keys(req.body)] = req.body[Object.keys(req.body)];
    res.send(order);
  }
  else {
    res.send('order doesn´t exist');
  }
}

const remove = (req, res) => {
  let paramId = parseInt(req.params.id)
  let index= orders.findIndex(element => element.id==paramId)
  if(index===-1){
    res.status(404).send({message: 'order not found'})
  }else{
    orders.splice(index, 1)
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