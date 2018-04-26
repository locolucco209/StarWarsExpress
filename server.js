const firebase = require('firebase');
const express = require('express');
const fs = require('fs');
const bodyparser = require('body-parser');
var app = express();
var path = require('path');

var seed = require('./seeds.json');

//FIREBASE DATABASE
var config = {
  apiKey: "AIzaSyDqAWxWACuu_lRm-LS4d4vVbnRg5F0uYB0",
  authDomain: "starwars-9d818.firebaseapp.com",
  databaseURL: "https://starwars-9d818.firebaseio.com",
  projectId: "starwars-9d818",
  storageBucket: "starwars-9d818.appspot.com",
  messagingSenderId: "763741664034"
};
var app2 = firebase.initializeApp(config);
app2.database().ref().push(seed)

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/view.html'));
});

app.get('/add', function(req, res) {
    res.sendFile(path.join(__dirname + '/add.html'));
});

app.get('/all', function(req, res) {
    res.sendFile(path.join(__dirname + '/all.html'));
});

app.get('/api/characters', function(req, res) {
    res.sendFile(path.join(__dirname + '/seeds.json'));
});

app.listen(8080);
