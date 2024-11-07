require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/aditya', (req, res) => {
  res.send('Hello World!')
  console.log({req});
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})