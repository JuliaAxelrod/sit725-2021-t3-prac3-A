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
// function listenToMyPort (portnumAny, CBgetPort){
//     console.log("Hello ", portnumAny);
// };

// app.listen (portnum, listenToMyPort);
// app.listen (portnum, getRandomPort);

// app.listen(getRandomPort (portnum), ()=> {
    
//     console.log("Hello, I am listening to port " + app.listen().address().port);
// })

let server = app.listen(getRandomPort (portnum), ()=> {
    
    console.log("Hello, I am listening to port " + server.address().port);
})
console.log("POrtnum ", portnum);
