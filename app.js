var express = require('express');
var exphbs  = require('express-handlebars');
var makeMove = require('./func/makeMove');
var newGame= require('./func/newGame');
var newGame2= require('./func/newGame2');
var bodyParser = require('body-parser');
var legalMove = require('./func/couldMove');
var randomMove = require('./func/randomMove');
var submitMove = require('./func/submitMove');
var promotePawn = require('./func/promotePawn');
var jsonParser = bodyParser.json;

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});


app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/help', function (req, res) {
    res.render('help');
});

app.post('/submitmove', function(req, res){
    res.json(submitMove(req.body.board, req.body.board.toPlay, req.body.from, req.body.to));
});
app.post('/getrandommove', function(req, res){
    res.json(randomMove(req.body.board, "black"));
});
app.post('/promote', function(req, res){
    res.json(promotePawn(req.body.board, req.body.denomination));
});
app.get('/newgame', function(req, res){
    res.json(newGame);
});
app.get('/test', function(req, res){
    res.render('test');
})



app.listen(port, () => console.log("listening on port 3000"));