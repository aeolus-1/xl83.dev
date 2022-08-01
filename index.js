const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const path = require('path')   

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/krispykitchen', (req, res) => {
    res.send("balls")
})

app.listen(port, () => {
  console.log(`Server launched`)
})