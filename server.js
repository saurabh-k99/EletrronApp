const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')
const mainRoute = require('./routes/mainRoute.js')
const app = express()

app.use(express.json())
app.use(fileUpload())
app.use(express.static(path.resolve(__dirname, 'build')))
app.use(express.static(path.resolve(__dirname, 'uploads')))
console.log(path.resolve(__dirname, 'uploads'));
app.use('/', mainRoute)

app.listen(5000, () => console.log('listening on port 5000...'))