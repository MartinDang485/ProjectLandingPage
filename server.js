const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');

app.listen(3000);

app.use(express.static(__dirname)); //Makes css static so it can be loaded into index.html
app.get('/', (req, res) => {
    res.sendFile('/index.html', { root: __dirname});
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + "/contact.html");
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post('/signup', (req, res) => { //Work on this later, make a signup that has their email
    res.send('Thank you for signing up!'); //eventually put it into a database
    console.log(req.body);
})

