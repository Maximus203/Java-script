// Importing express
const express = require('express');
// Creating a variable named port and setting it value to 3000
const port = 5000;

//creating an express app
const app = express();

// Setting the port of the express app
app.set("port", port);

// Creating a function named projects who will return a message
const projects = (req, res) => {
    res.send('All the project are here ...')
}

// Defining a route to /project
app.get('/projects', projects)


// Deploying the server and printing a message in the console
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});