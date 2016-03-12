var express = require('express');
var app = express();
var url = "www.baidu.com";

app.get(url,function(req,res,next){
  	console.log('sending get to url: '+ url);
  	var body = "";
  res.on('data',function(chunk){
  	body += chunk.toString();
  	});
  res.on('end', function(){
  	console.log(body);
  	res.send(body);
  	});
  });
  
app.listen(8080,'127.0.0.1');
console.log('Listening...');