var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

history({
  rewrites: [
    { from: /\/about/, to: '/index.html'}
  ]
});


module.exports = router;
