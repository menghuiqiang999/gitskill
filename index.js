var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '深圳月光葡萄酒有限公司1' });
    console.log("test");
});

module.exports = router;
