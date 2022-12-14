// Start with these steps: 
// npm init
// npm install --save express
// npm install --save-dev nodemon
// add "start": "nodemon app.js" in package.json

const express = require('express')
const path = require('path')

const routes = require('./routes/index')

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.use(routes)

app.listen(3000)