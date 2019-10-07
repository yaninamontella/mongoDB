const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const mongoose= require('mongoose')


const app = express()
const port = 5000

const mongoDbUrl= 'mongodb+srv://yaninamontella:yanina123@cluster0-jbcus.mongodb.net/clase08'

app.use('/api', router)
app.use(express.static('public'))
app.use(bodyParser.json())

mongoose.connect(mongoDbUrl, {useNewUrlParser: true}, { useUnifiedTopology: true } )



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
