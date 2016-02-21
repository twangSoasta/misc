var https= require('https');
var fs = require('fs');

var myModule = require("./request.js");

myModule.getRepos("twangSoasta",function(a){              //define callback when calling the functions
	console.log("done calling getRepos"+a);
});

