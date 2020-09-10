var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = [{
    name : "Lohitha",
    age: 21,
    salary: 5000
  },
{
  name: "ravi",
  age: 28,
  salary : 8000
},
]
res.render('index', { title: 'Express',
myName : "lohitha"
});
});

module.exports = router;
