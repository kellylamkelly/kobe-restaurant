const express = require('express');
const http = require('http');
const path = require('path');
const expressSession = require('express-session');

// Get model functions
var support = require("./model.js");

// Construct express object
const app = express();

const port = process.env.PORT || 3000;

// Set session properties
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "345hjbkSEfjkmdsnfjsdNf98",
    cookie: {maxAge: 600000} // 600 seconds = 10 mins
}));

app.use(express.static(__dirname + '/dist/kobe-restaurant'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));