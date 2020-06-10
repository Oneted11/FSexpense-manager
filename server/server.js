var express=require ('express')
var router =require('./routes/routes.js')
var path = require('path');

var app=express()
app.set('veiw engine','ejs')
app.set('views',path.join(__dirname,'../client'))
app.arguments(express.static(path.join(__dirname,'../client')))

app.arguments('/',router)
module.exports=app