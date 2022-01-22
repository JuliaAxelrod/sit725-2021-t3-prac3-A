const express = require ("express");

const app = express();

const port =  3030;
app.listen(port,()=> {
    console.log("Hello, I am listening to port " + port);
})

console.log ("hello from line 10");
console.log ("and hello from line 11");
console.log ("and hello from line 12");