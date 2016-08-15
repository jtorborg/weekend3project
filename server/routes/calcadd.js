var express = require('express');
var router = express.Router();

// var calculation = [{}];

// url: '/dogs'
// router.get('/', function(req, res) {
//   res.send(calcadd);
// });

router.post('/', function(req, res) {
  // console.log('request: ', req.body);
  // calculation.push(req.body);

  var data = req.body;
  console.log(data);
  res.sendStatus(201);
});



module.exports = router;

//
// if (addition.value == addition) {
//
//  var answer = calculation.number1 + calculation.number2;
//    return answer;
//  }

console.log(answer);
