const getAll = (req, res) => {
    res.send(products)
}

const getById = (req, res) => {
    const paramId = Number(req.params.id)
    const result = products.find( ({id}) => id === paramId)  
    res.send(result)
}

const insert = (req, res) => { 
  const paramId = parseInt(req.body.id)
  let product= products.find( ({id}) => id === paramId) 
  if(product){
    res.status(404).send({message: 'The product Already exist'})
  }else{
    products.push(req.body)
    res.send({message: 'New product added' , data : products[paramId]})
    }
}

const upsert = (req, res) => {
  const paramId = parseInt(req.params.id)
  let product= products.find( ({id}) => id === paramId) 
  if(product){
    product = { ...req.body, id: paramId}
    res.send({message: 'Update Successfully!'});
  }else{
    res.status(404).send({message: 'product not found'})
    }
}

const update = (req, res) => {
  const product = products.find(product => product.id == req.params.id);
  if (product) {
    product[Object.keys(req.body)] = req.body[Object.keys(req.body)];
    res.send(product);
  }
  else {
    res.send('product doesn´t exist');
  }
}

const remove = (req, res) => {
  let paramId = parseInt(req.params.id)
  let index= products.findIndex(element => element.id==paramId)
  if(index===-1){
    res.status(404).send({message: 'product not found'})
  }else{
    products.splice(index, 1)
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