var child_process = require('child_process');
var util = require('util');
var spawn = child_process.spawn;  //for windows to spawn a terminal window 
var exec = child_process.exec;
var list = exec('ls -l',function(err,stdout,stderr){
	  console.log('error => '+ err);
	  console.log('stdout => '+ stdout);
//	  process.exit(500);
	});
	list.stdout.on('data',function(data){
		console.log('ls -l data listened is: '+ data);
		});
  list.on('exit',function(code){
  	console.log('ls -l exit with code:'+code);
  	});
  
var execFile = child_process.execFile;
var showVer = execFile('npm', ['faq'],function(err,stdout,stderr){
	  console.log('error => '+ err);
	  console.log('stdout => '+ stdout);
	});
	
	showVer.on('exit',function(code){
		process.stdout.write('npm end with code: '+code+'\n');
		});
	
	showVer.stdout.on('data',function(data){
		console.log('npm listened data is: '+data+'\n');
		});

 var mongod = spawn('mongod',['--dbpath "../install/mongo323/data/db"']);
 mongod.emit({hello:'damn it!'});
 
 process.on('message',function(msg){
 	console.log('got the message'+ msg.hello.toUpperCase());
});