const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'views/index.html'))
})
app.listen(7000, function () {
    console.log("Listen Started")
})