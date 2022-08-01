const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const home = readFileSync("myFile.txt");
const path = require('path')   

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(port || process.env.PORT, () => {
  console.log(`Server launched`)
})