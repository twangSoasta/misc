var express = require('express');
var router = express.Router();
var app = express();   
var http = require('http');

router.get('/', function(req, res, next) {
  var url = req.query.url;
  console.log("url is "+url);
   var options = {  
            host : url,  
            port : '80',  
            path : '/',  
            headers: {
 //           	'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36',
            	'Accept':'x-www-form-urlencoded,text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            	'Accept-Language':'en-US,en;q=0.8,zh-CN;q=0.6'           
            },
            method : 'get'  
        }; 
   var myReq = myRequest(options,function(body){
   	   res.setHeader('content-type', 'text/html;charset=utf-8');
   	   res.send(body);
   	});      
});

function myRequest(options,callback){
	var request = http.request(options,function(res){
  	    var body = "";
  	    res.setEncoding('utf8');
        res.on('data',function(chunk){
        	 body += chunk;
        });
        res.on('end', function(){  
        	 console.log(body); 
        	 callback(body); 
   	    });  	
 	    });
  request.end();
  request.on('error',function(e){
  	console.log('http request error occured: '+e);
  	});
	
	}

module.exports = router;

