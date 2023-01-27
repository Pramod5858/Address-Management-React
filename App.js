const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./Routes/index');
const { response, request } = require('express');

const port = 5500;
const hostname = 'localhost';
const AtlasDbUrl = 'mongodb+srv://user_12:GjKd5OpYeJWi3oEr@cluster0.fakhrz8.mongodb.net/testing1?retryWrites=true&w=majority';

/* 
Database :- testing1 
Collection Name :- testing1 , addresses
Username:-user_12
Password:-GjKd5OpYeJWi3oEr
Link:- mongodb+srv://user_12:<password>@cluster0.fakhrz8.mongodb.net/?retryWrites=true&w=majority
*/

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

mongoose.connect(AtlasDbUrl, {
    UseNewUrlParser: true, UseUnifiedTopology: true
})
    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Connection Succesfully to ${hostname}:${port}`)
        })
    })
    .catch(err => console.log(err));