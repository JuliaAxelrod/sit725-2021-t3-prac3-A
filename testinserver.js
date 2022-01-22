const express = require ("express");
const app = express();
// const port = 3030;

let server = app.listen (0, ()=> {
    console.log ("Server is listening on ", server.address(), " ", server.address().port);
    console.error ("Error");
        
  
})