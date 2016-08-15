var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require('path');
var calcadd = require("./routes/calcadd.js");
var calcsubtract = require("./routes/calcsubtract.js");
var calcmultiply = require("./routes/calcmultiply.js");
var calcdivide = require("./routes/calcdivide.js");

app.use(bodyParser.urlencoded({extended: true}));


//routes
app.use('/calcadd', calcadd);
app.use('/calcdivide', calcdivide);
app.use('/calcmultiply', calcmultiply);
app.use('/calcsubtract', calcsubtract);


//server static files
app.get('/*', function(req, res) {
	var file = req.params[0] || '/views/index.html'
	res.sendFile(path.join(__dirname, './public', file));
});


app.set('port', process.env.PORT   || 5000);

app.listen(app.get('port'), function () {
console.log('server is running on part ', app.get('port'));


});
