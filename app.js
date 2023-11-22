var express = require('express');
var { engine } = require('express-handlebars');
const cors = require('cors');
var port = process.env.PORT || 3000

var app = express();
app.use(cors())
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.static('assets'));

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/detail', function (req, res) {
    res.render('detail', req.query);
});
app.get('/success', function (req, res) {
    res.render('success', req.query);
});

app.listen(port, () => {
    console.log("Corriendo en el puerto", port)
});