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

// Home page "/" - when initially requested, load item list into session
app.get("/", function (request, response) {
    if (!request.session.itemSession) { // if no item list in session
        request.session.itemSession = support.getItems(); // load and store now
    }
});

// Display cart page
app.get("/cart", function(request, response) {
    response.render("cart.component.html", {cart: request.session.cart,
                             total: support.getTotal(request.session.cart)});
});

// Validate selected item not already in cart
app.get("/add", function(request, response, next) {
    var id = request.query.id; // get id from request
    // check whether item with this id is in cart
    var errors = support.validateAdd(id, request.session.cart);
    if (Object.keys(errors).length === 0) { // no errors in object
        next(); // no errors, so continue normal route
    }
    else { // redisplay current cart with error message
        response.render("cart", {cart: request.session.cart,
                                 total: support.getTotal(request.session.cart),
                                 duplicate: support.getItemByID(id, request.session.itemSession)});
    }
});

// Add item to cart
app.get("/add", function(request, response, next) {
    var id = request.query.id; // get id from request
    var mycart = request.session.cart; // get cart from session
    // add item to cart, getting modified cart as return
    mycart = support.addItem(id, mycart, request.session.itemSession);
    // store modified cart in session
    request.session.cart = mycart;
    next();
});

// Display cart page
app.get("/add", function(request, response) {
    response.render("cart", {cart: request.session.cart,
                             total: support.getTotal(request.session.cart),
                             additem: support.getItemByID(request.query.id, 
                                                            request.session.itemSession)});
});

// Remove selected item
app.get("/remove", function(request, response, next) {
    var id = request.query.id; // get id from request
    var mycart = request.session.cart; // get cart from session
    // call support function to remove item from cart
    cart = support.removeItem(id, mycart);
    // store modified cart back into session
    request.session.cart = mycart;
    next();
});

// Display cart page
app.get("/remove", function(request, response) {
    response.render("cart", {cart: request.session.cart,
                             total: support.getTotal(request.session.cart),
                             removeitem: support.getItemByID(request.query.id, 
                                                            request.session.itemSession)});
});

// Change quantity of selected item
app.get("/change", function(request, response, next) {
    var id = request.query.id; // get id of item to change
    var quantity = request.query.quantity; // get new value to change quantity
    var cart = request.session.cart; // get cart from session
    // call support function to change quantity for this item in cart
    cart = support.changeQuantity(id, quantity, cart);
    // store modified cart back into session
    request.session.cart = cart;
    next();
});

// Display cart page
app.get("/change", function(request, response) {
    response.render("cart", {cart: request.session.cart,
                             total: support.getTotal(request.session.cart),
                             changeitem: support.getItemByID(request.query.id, 
                                                            request.session.itemSession)});
});

// If reach here, request not handled by any previous gets, so send error page
app.use(function (request, response) {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<html><body><h2>Sorry -- file not found!</h2></body></html>');
});

// If reach here, an unhandled error occurred somewhere previously
app.use(function (err, request, response, next) {
    console.log(err);
    response.writeHead(500, { 'Content-Type': 'text/html' });
    response.end('<html><body><h2>Server error!</h2></body></html>');
});

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));