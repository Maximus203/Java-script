// Import
const express = require('express');
// Routes


// Creating a variable named port and setting it value to 3000
const port = 5000;
//creating an express app
const app = express();
// Setting the port of the express app
app.set("port", port);


// public notre base de vue
app.use(express.static('public'));
// Defining a route to /project
app.get('/index', index = (req, res) => {
    res.render('index.html');
});
app.get('/classe', classe = (req, res) => {
    res.render('classe.html');
});




// Deploying the server and printing a message in the console
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});