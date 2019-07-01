var  http=require('http');
var fs=require('fs');
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
var querystring=require('querystring');
http.createServer(function(req,res){
 if(req.url==="/form"){
   res.writeHead(200,{"Content-Type":"text/html"});
   fs.createReadStream("F:/Data/PROGRAM/HAL/Book Store/d.html","UTF-8").pipe(res);
 }
 if(req.method==="POST"){
  var data=""; 
  req.on("data",function(chunk){
    data+=chunk;
   });
   req.on("end",function(chunk){
  
 MongoClient.connect(url,function(err,result){
  if(err) throw err;
  var q=querystring.parse(data);
  db.collection('customer').insertOne(q,function(err,res){
    if(err) throw err;
    db.close();
  });
 });
    console.log(q);
   });
 }
}).listen(3000);