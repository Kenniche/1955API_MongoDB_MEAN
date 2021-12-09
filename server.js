const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955', { useNewUrlParser: true });
const app = express();
app.use(express.static(__dirname + "/static"));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const routes = require('./server/config/routes')(app);

app.listen(9090, () => console.log("listening on port 9090"));