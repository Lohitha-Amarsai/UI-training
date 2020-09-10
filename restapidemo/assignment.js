const express = require('express');

const bodyParser = require('body-parser');
const { ROUTE_CONTSTANTS } = require('./helpers/route_constants');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post(ROUTE_CONTSTANTS.POST_LOGIN, function(req,res){
    console.log(req.body);
    res.send("Login Successful")
})

app.get(ROUTE_CONTSTANTS.DEFAULT,function (req,res){
    res.send("<h1>Pega</h1>");
});


app.get(ROUTE_CONTSTANTS.GET_LOGIN,function (req,res){
    res.sendFile(__dirname+'/pages/login.html')
});

app.listen(3000);