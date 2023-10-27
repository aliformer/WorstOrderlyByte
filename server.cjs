const http = require('http');//create a server object:
const fs = require('fs');
const data =
  fs.readFileSync("./mock-api.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }

      try {
      const customer = JSON.parse(jsonString);
      return customer
        
      } catch (err) {
        console.log("Error parsing JSON string:", err);
      }    
  });

const server = http.createServer(function (req, res) {
 const url = req.url;
 if(url ==='/all'){
   res.setHeader("Content-Type", "application/json");
   res.writeHead(200);
   res.end(JSON.stringify(data, null, 3));
 }else if(url.includes('/item')){
    const id = url.split('/')[1]
    const result = data[3]
   console.log(result)
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(JSON.stringify(result, null, 3)); //end the response
 }else{

    res.writeHead(200, {'Content-Type': 'text/html'}); // http header
    res.write('<h1>Hello World!<h1>'); //write a response
    res.end(); //end the response
 }})

server.listen(3000, function(){
   console.log("server start at port 3000"); //the server object listens on port 3000
  });