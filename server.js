var express = require('express');
var path = require('path');
var bodyParser = require('body-Parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = express();
var port = 3000;

 

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

//set static file
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', index);
app.use('/api', tasks);

/* for cors issue

var express = require('express');

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

*/
//cors end


app.listen(port, function(){
    console.log('Server started on port 3000');
});