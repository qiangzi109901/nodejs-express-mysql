
var print = require('mprint');

exports.index = function(req,res){
    print.ps("ssss")
    req.models.test.add({
        "name" : "11",
        "password" : "333333",
        "gender" : "222"
    },res);
}

exports.page404 = function(req,res){
    throw new Error('xx')
    res.render('error',{"message":"找不到页面了"});
}

exports.page500  = function(req,res){
    res.render('error',{"message":"My God,服务器出错了"});
}

exports.auto = function(req,res){
    res.renderPage(req.originalUrl);
}