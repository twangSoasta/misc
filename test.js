 var str = '{"张三": 85,"李四": 88,"王五": 79}';
    var jsonObj = eval( "(" + str + ")" );
    var arr=[];
    for (var name in jsonObj) arr.push({"name":name,"value":jsonObj[name]});
    arr.sort(function compare(a,b){return b.value-a.value});
    var jsonObj = {};
    for(var i=0;i<arr.length;i++) jsonObj[arr[i].name] = arr[i].value;
	
	console.log(jsonObj);