var cheerio = require('cheerio');
var fs = require('fs');
var html = fs.readFileSync("./qcapi/LG.xml");
var $ = cheerio.load(html);

var qingArr =$('Provider');
console.log((qingArr.length)+"\n");
qingArr.each(function(i,d){
	console.log(i+ " "+ $(d).text()+"\n");
});

var url = $('Maestro > Contact').attr('url');
var url1 = $('Monitor > Contact').attr('url');
var urlOutside = $('Contact').attr('urlOutsideLocation');
console.log(url+"\n"+url1);
var url = $('Maestro > Contact').attr('url','I modified it');
var url1 = $('Monitor > Contact').attr('url','I modified it 2');
console.log(url+"\n"+url1);


//url.each(function(i,d){
//	console.log($(d).text()+"\n");
//});