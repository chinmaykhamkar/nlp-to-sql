const http = require('http');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


const nlpHandler = require('./nlpHandler');

async function handleRequest(req, res) {

    try {
        console.log("inside ")
        console.log(req.body);
        
        let sentence = req.body.sentence;
            // let body = JSON.parse(mdata) // 'Buy the milk'

        if(!sentence) throw new Error('sentence not found');    

        let query = await nlpHandler.processSentence(sentence);
        res.send({query:query}); //write a response to the client

    } catch (error) {
        res.send({msg:error.message}); //write a response to the client
    }

}


app.route('/').post(handleRequest);

 let PORT = 3000;
app.listen( PORT, () => {
    console.log(`listening on ${PORT}`);
});

//create a server object:
// http.createServer(handleRequest)
//     .listen(3000, function() {
//         console.log("server start at port 3000"); //the server object listens on port 3000
//     });