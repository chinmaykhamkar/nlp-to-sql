var http = require('http');

const nlpHandler = require('./nlpHandler');

function handleRequest(req,res){
    
    let mdata = '';
    req.on('data', chunk => {
      mdata+=chunk;
    })

    req.on('end',async () => {
        try {
            
            console.log('data',mdata)
            let body = JSON.parse(mdata) // 'Buy the milk'

            console.log(body);

            let query = await nlpHandler.processSentence(body.sentence);
            res.write(query); //write a response to the client
            res.end(); //end the response
        
        } catch (error) {
            res.write(error.message); //write a response to the client
            res.end(); //end the response
        }
    })

}

//create a server object:
http.createServer(handleRequest)
.listen(3000, function(){
    console.log("server start at port 3000"); //the server object listens on port 3000
});

