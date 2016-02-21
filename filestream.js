var fs = require('fs');
var assert = require('assert');
var crypto = require('crypto');



function copy(src,dst){
	fs.writeFileSync(dst,fs.readFileSync(src));
	console.log(arguments);
}

var src = "../js/files/test.mp4";
var dst = "../js/files/testcopy.mp4";
d= new Date();
t= d.getTime();
console.log(t);
copy(src,dst);
d1 = new Date();
console.log("1 " +(d1.getTime()-t));
//console.log(process.argv);
///////////////////////////////////////////////////////////////////

function copystream(src,dst){
	f= fs.createReadStream(src).pipe(fs.createWriteStream(dst));
	//assert(true,"it's so fast you don't see it");
	
}
var src = "../js/files/testcopy.mp4";
var dst = "../js/files/testcopy2.mp4";
d= new Date();
t= d.getTime();
console.log(t);
copystream(src,dst);
d1 = new Date();
console.log("2 " +(d1.getTime()-t));
//////////////////////////////////////////////////////////////////
d= new Date();
t= d.getTime();
var chunkArr =[];
var f = fs.createReadStream(src);
var f2 = fs.createWriteStream(dst)
f.on('open',function(d){
	console.log("d=",d);
});
f.on('data',function(chunk){
      f.pause();
      chunkArr.push(chunk);   //64 KB chunks of every read stream
	  f2.write(chunk);
	  f.resume();
	  
	});
f.on('end',function(){
	    f2.end();
		console.log("file done! ",chunkArr.length);
		d1 = new Date();
		console.log("3 " +(d1.getTime()-t));
	});
/////////////////////////////////////////////////////////////////////////

var path = require('path');
function travel(dir,callback){
	fs.readdirSync(dir).forEach(function(file){
		var pathname = path.join(dir,file);
	//	console.log("the current pathname is: ",pathname);
		if (fs.statSync(pathname).isDirectory()){
			travel(pathname,callback);
		} else {
			callback(pathname);
		}
		});
}

//var dir = "F:/Program Files/nodejs/js/files";
var dir = "../misc";

travel(dir,function(pathname){
	console.log("the final pathname is: ",pathname);
});
/////////////////////////////////////////////////////////////////////////

var dst = "../js/files/testcopyhmac.mp4";
var hash = crypto.createHash('sha256');
var input = fs.createReadStream(src);
var output = fs.createWriteStream(dst);
//console.log("Digest: "+hmac.update("okokok").digest("base64"));
var hmacBuf = new Buffer(65);
input.pipe(hash).pipe(output);   
/////////////////////////////////////////////////////////////////////////

var rd = fs.createReadStream(src);

rd.on('readable', function(){
   var data = rd.read(256);
 //  rd.pause();
   process.stdout.write("read the "+data.toString().length +" bytes of the file:\n" + data.toString()+"\n");
})

var Readable = require('stream').Readable;
var rs = new Readable;
rs.push('This is Tony Wang');
rs.push(' and I am awsome!\n');
rs.push(null);
rs.pipe(process.stdout);

/////////////////////////////////////////////////////////////////////////








