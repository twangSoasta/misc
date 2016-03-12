var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('hitting the exp root 1st handler, query is '+req.query.abc);
  if (req.query.abc != 2) {
    next('route');
  } else {
    next();
  }
},
function(req,res,next){
	res.send('hitting the exp root 2nd handler');
	}
);

router.get('/',function(req,res,next){
	res.send('hitting the exp root 3rd handler');
});

router.get('/exp2/:name', function(req, res, next) {
	res.send('hitting exp/exp2 name is '+req.params.name);
});

router.get('/exp3/*', function(req, res, next) {
	res.send('hitting exp/exp2 name is '+req.params[0]);
});



module.exports = router;
