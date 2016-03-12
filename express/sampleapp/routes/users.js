var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/myuser', function(req, res, next) {
  res.send('myuser hits');
});

router.get('/download',function(req,res,next){
//	 res.download(path.join(__dirname, 'app.js'));
  res.download('app.js');
});
	 

module.exports = router;

