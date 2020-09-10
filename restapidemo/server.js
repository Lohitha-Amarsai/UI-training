const express = require('express');
const bodyParser = require('body-parser');
const { ROUTE_CONTSTANTS } = require('./helpers/route_constants');

const app = express();
const asyncRequest=require('async-request');
const countryListUrl='https://restcountries.eu/rest/v2/all';


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get(ROUTE_CONTSTANTS.GET_COUNTRIES,async function(req,res){
  const response=await asyncRequest(countryListUrl);
  res.json(response);
});
app.post(ROUTE_CONTSTANTS.POST_REGISTER, function(req,res){
    console.log(req.body);
    res.send("Successfully Registered")
})

//route, callback function.
app.get(ROUTE_CONTSTANTS.DEFAULT,function (req,res){
    res.send("<h1>Pega</h1>");
});

app.get(ROUTE_CONTSTANTS.GET_LOGIN,function (req,res){
    res.sendFile(__dirname+'/pages/login.html')
});

app.get(ROUTE_CONTSTANTS.GET_REGISTER,function (req,res){
    res.sendFile(__dirname+'/pages/register.html')
})

app.get(ROUTE_CONTSTANTS.GET_PRODUCTS,function (req,res){
    const productsData = [
        '{{repeat(5, 7)}}',
        {
          _id: '{{objectId()}}',
          index: '{{index()}}',
          guid: '{{guid()}}',
          isActive: '{{bool()}}',
          balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
          picture: 'http://placehold.it/32x32',
          age: '{{integer(20, 40)}}',
          eyeColor: '{{random("blue", "brown", "green")}}',
          name: '{{firstName()}} {{surname()}}',
          gender: '{{gender()}}',
          company: '{{company().toUpperCase()}}',
          email: '{{email()}}',
          phone: '+1 {{phone()}}',
          address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
          about: '{{lorem(1, "paragraphs")}}',
          registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
          latitude: '{{floating(-90.000001, 90)}}',
          longitude: '{{floating(-180.000001, 180)}}',
          tags: [
            '{{repeat(7)}}',
            '{{lorem(1, "words")}}'
          ],
          friends: [
            '{{repeat(3)}}',
            {
              id: '{{index()}}',
              name: '{{firstName()}} {{surname()}}'
            }
          ],
          greeting: function (tags) {
            return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
          },
          favoriteFruit: function (tags) {
            var fruits = ['apple', 'banana', 'strawberry'];
            return fruits[tags.integer(0, fruits.length - 1)];
          }
        }
      ];
      res.json(productsData)
});
app.listen(3000);