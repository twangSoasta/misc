function human(age,height){
	this.age = age;
	this.height = height;
	this.introduce = function(age,height){
		console.log("Hi, my age is: "+age," my height is:"+height);
		console.log("The current this is :"+JSON.stringify(this));
	}
}

function monkey(age,height){
	this.age = age;
	this.height = height;
}

function dog(age,height){
	this.age = age;
	this.height = height;
	human.call(this,age,height);
}

tony = new human(39,171);
amber = new human(34,165);
monkeyabc = new monkey(3,111);
dogabc = new dog(1,40);

//tony.introduce();
//amber.introduce();
tony.introduce.call(monkeyabc,4,121);   //Object abc called Object tony's method, passing new set of parameter
dogabc.introduce(2,41);   //call introduce function that doesn't below to dog class

var http = require('http');
function callback(req,res){
	console.log("incoming request is for:",req.url,req.url,req.method);
	res.writeHead(200,{"content-type":"text/html"});
	res.write("Moneky Year Lots of Money and Stay Healthy!");
	res.end();
}
http.createServer(callback).listen(8888,function(){
	console.log("listening on port:",8888);
});


