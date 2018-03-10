var express = require('express');
var exphbs  = require('express-handlebars');
var makeMove = require('./func/makeMove');
var newGame= require('./func/newGame');
var bodyParser = require('body-parser');
var legalMove = require('./func/legalMove');
var randomMove = require('./func/randomMove');
var jsonParser = bodyParser.json;

var app = express();

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

app.post('/submitmove', function(req, res){
    //console.log(req.body.to);
    //console.log(makeMove(req.body.board, req.body.board.toPlay, req.body.from, req.body.to));
    res.json(makeMove(req.body.board, req.body.board.toPlay, req.body.from, req.body.to));
});
app.post('/getrandommove', function(req, res){
    //console.log(req.body.to);
    console.log(randomMove(req.body.board, "black"));
    //console.log(makeMove(req.body.board, req.body.board.toPlay, req.body.from, req.body.to));
    res.json(randomMove(req.body.board, "black"));
});
app.get('/newgame', function(req, res){
    res.json(newGame);
})


app.listen(3000, () => console.log("listening on port 3000"));