var http = require('http');
var fs=require('fs');
var querystring=require('querystring');
var  MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/newdb";
http.createServer(function(req,res){

if(req.url=="/form"){
res.writeHead(200,{"Content-Type":"text/html"});
fs.createReadStream("./d.html","UTF-8").pipe(res);}

if(req.method==="POST"){
var data="";
req.on("data",function(chunk){
data+=chunk;
});
req.on("data",function(chunk){
 MongoClient.connect(url, function(err, result) {
  if (err) throw err;
var q=querystring.parse(data);
db.collection('customer').insertOne(err,res){
if (err) throw err;
  
db.close();
});
});
}
}).listen(3000);