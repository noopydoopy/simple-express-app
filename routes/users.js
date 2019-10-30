var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function(req, res, next) {
  res.send([{userId: 1 , name: 'Yes Man'}, {userId: 2 , name: 'No Man'}]);
});

module.exports = router;
