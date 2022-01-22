const express = require ("express");

const app = express();



function getRandomPort (p) {

    var t = Math.floor ((Math.random () * 100000) / 100);
    console.log ("t = ", t);
    console.log ("p = ", p);
    if (p > t)
    return p;
        else 
    return 3030 ;
};

var portnum  = Math.floor ((Math.random () * 100000) / 100);
console.log("Portnum --  ", portnum);

// Find port node.js is listening to. app.listen uses random port. 
// https://www.kevinsimper.dk/posts/how-to-get-the-port-of-express.js-app-devtip
let server = app.listen(getRandomPort (portnum), ()=> {
    
    console.log("Hello, I am listening to port " + server.address().port);
})
console.log("POrtnum ", portnum);
