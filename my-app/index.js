const express= require('express');
const cors= require('cors');
const app= express();
var path = require('path');
const connection = require('./connection.js');
const user =require('./Routes/user.js');

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'Static')));

//enable submit form
app.use(express.urlencoded({extended: true}))

app.use(cors());
app.use(express.json())


app.get('/update/:id', user)
app.get('/add', user)
app.use('/', user)

module.exports=app



