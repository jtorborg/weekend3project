var express = require('express');
var router = express.Router();

var calculation = [{ }];

// url: '/dogs'
router.get('/', function(req, res) {
  res.send(calcsubtract);
});

router.post('/', function(req, res) {
  console.log('request: ', req.body);
  calculation.push(req.body);
  res.sendStatus(201);
});



module.exports = router;


if (input.value == subtract) {

var answer = calculatorform.number1 - calculatorform.number2;
  return answer;
}
