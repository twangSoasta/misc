var https= require('https');
var fs = require('fs');

function getRepos(username,callback){
	
var options = {
	host : "api.github.com",
	path : "/users/" + username + "/repos",
	headers : {
		"User-Agent":"Chrome/46.0.2490.80"
	},
	method : "GET"
};	
	
var request = https.request(options, function(response){     //callback parameters are not provided by user but by the caller function's return 
	var body ="";                                            //https.request takes options and produces response, when response is ready it will trigger the callback function to produce repos,json etc.
	response.on("data",function(chunk){          // listens on incoming data， coming in chunks
	   body += chunk.toString('utf8');	
	});  
	response.on("end",function(){                 // when response ends, it will trigger the event
	    var repos =[];
	    var json = JSON.parse(body);            //body into object
	//	console.log("json message: ",json);
		fs.writeFileSync("./files/github.log",JSON.stringify(json));           //object to string == body
		if (json.message == 'Not Found'){
			console.log("User does not exisit!");
		}else {
		json.forEach(function(repo){
			repos.push({
				name: repo.name,
				description: repo.description 
			});
		//	console.log("repo "+JSON.stringify(repo));
		});
		//console.log("Body: ",body);
		console.log("Repos: "+JSON.stringify(repos)+ repos[0].name+" "+repos[0].description);
		callback(repos,json);
	}
	});  //end of response.on end
   });
   request.end();
};


/*
getRepos("twangSoasta",function(repos){
	console.log("tony has "+repos.length+" repositories on Github");
});
*/
/*
getRepos("QinJordan",function(repos){
	console.log("Jordan has "+repos.length+" repositories on Github");
});
*/

module.exports.getRepos = getRepos;

