var express = require('express');
var router = express.Router();



var http=require('http');

var headers = {
  'copyright': 'application/json',
  'url': 'appUrl/json'
};

var options = {
  host: 'www.bing.com',
  port: 8080,
  path: '/HPImageArchive.aspx?format=js&idx=0&n=4',
  method: 'GET'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  var http = require("http");
  var urlPath='http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=4';
  http.get(urlPath, function(response) {
    response.setEncoding('utf-8');
    //console.log("状态码 %d \nheaders:\n %s \n当前的请求方式为【GET】请求",response.statusCode,JSON.stringify(response.headers));
    var receiveData = "";
    var testJson = {};
    response.on('data', function (chunk) {
      receiveData += chunk;
      testJson = eval("(" + chunk + ")");

    }).on('end', function () {
      //打印
      //console.log("\n获得的数据为：" + receiveData);
      //字符串转换为json
      //console.log(testJson.images);
      var oImgList = testJson.images;
      //console.log(oImgList);

      res.render('index', { title: "ET-Zhang",oImgList:oImgList , oImgSrc:"www.bing.com"});

    });

  }).on('error', function(e) {
    console.log(e.message);
  });

});


module.exports = router;
