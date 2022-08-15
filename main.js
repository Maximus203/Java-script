// Import
const express = require('express');
// Routes
require('./routes');



// Creating a variable named port and setting it value to 3000
const port = 5000;
//creating an express app
const app = express();
// Setting the port of the express app
app.set("port", port);


// Defining a route to /project
app.get('/', index)
app.get('/projects', projects)




// Deploying the server and printing a message in the console
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});