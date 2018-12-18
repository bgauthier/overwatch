const express = require('express')
const app = express()
const port = 3000
const randomstring = require("randomstring");
const mysql = require('mysql');
var bodyParser = require('body-parser');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'overwatch',
    password: '',
    database: 'overwatch',
});

con.connect((err) => {
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (request, response) => {
    response.send('Hello from Express!')
});

// New game
app.get('/Game/new', (req, res) => {

    let data = {
        status : null,
        gameCode : null,
        gameID : null,
    };

    data.gameCode = randomstring.generate(8);


    let sql = 'INSERT INTO tblGames (GameCode) VALUES (\'' + data.gameCode + '\')';

    con.query(sql, (err,result) => {

        if (err) {
            data.status = 'ERROR';
            console.log(err);
        } else {
            console.log(result);
            data.status = 'OK';
            data.gameID = result.insertId;
        }

        res.send(JSON.stringify(data));

    });

});

app.post('/Game/join', (req, res) => {

    let data = {
        status : null,
        gameCode : null,
    };

    console.log(req.body);

    data.status = 'OK';
    data.gameCode = req.body.gameCode;

    res.send(JSON.stringify(data));

});


/**
 * Start server
 */
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
})