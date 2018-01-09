var express = require('express');
var router = express.Router();
var mediaPath = 'public/media';
/* GET home page. */
router.get('/', function(req, res) {
  var fs = require("fs");
  fs.readdir(mediaPath,function(err,names){
  	  if(err){
  	  	  console.log(err);
  	  }else{
  	  	  res.render('index', { title: 'Music',music: names });
  	  }
  });
  
});

module.exports = router;
