/**
 * Created by zhangyingjie on 16/10/10.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('faq', {});
});

module.exports = router;
