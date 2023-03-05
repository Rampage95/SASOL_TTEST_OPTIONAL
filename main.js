
const express = require('express');

/*
*

    If you want to test the /parse POST endpoint using the example shown in the instruction pdf:
    
    Input: 

    [
        [1,2,3,4,5],
        [1,10,3,4,"=SUM(A1:E1)"],
        [1,2,"=B2*1.3",4,5]
    ]

    Output:

    [
        [1,2,3,4,5],
        [1,2,3,4,15],
        [1,2,13,4,5]
    ]

    Then please use the JSON below as payload:

    {
        "sheet": "[[1,2,3,4,5],[1,10,3,4,\"=SUM(A1:E1)\"],[1,2,\"=B2*1.3\",4,5]]"
    }

    ---> Note that "[[1,2,3,4,5],[1,10,3,4,\"=SUM(A1:E1)\"],[1,2,\"=B2*1.3\",4,5]]" string is the result of 
    applying the method JSON.stringify() on the input array above to be able to send a payload in JSON format. 
*
*/


require('dotenv').config();
const bodyParser = require('body-parser')

var cors = require('cors');
const ROUTER = require('./route/route.js');

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', ROUTER);


app.listen(process.env.SERVER_PORT, () => {
    console.log(`The server is listening on port ${process.env.SERVER_PORT}`);
});



