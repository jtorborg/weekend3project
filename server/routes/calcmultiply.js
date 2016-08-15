var express = require('express');
var router = express.Router();

var calculation = [{}];

// url: '/dogs'
router.get('/', function(req, res) {
  res.send(calcmultiply);
});

router.post('/', function(req, res) {
  console.log('request: ', req.body);
  calculation.push(req.body);
  res.sendStatus(201);
});



module.exports = router;


// 
// if (multiplication.value == multiply) {
//
//  var answer = calculation.number1 * calculation.number2
//    return answer;
//  }
