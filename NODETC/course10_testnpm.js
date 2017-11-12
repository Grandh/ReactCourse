var http = require("http");
var url = require("url");
var solarLunar = require('solarlunar');

http.createServer((req,res) =>{

    var queryobj = url.parse(req.url,true).query;
    var result = solarLunar.solar2lunar(queryobj.y,queryobj.m,queryobj.d);
    console.log(result);
    var str = result.gzYear + result.animal + "年" + result.monthCn + " " + result.dayCn;
    res.setHeader("Content-Type","text/html;charset=UTF-8");
    res.end(str);

}).listen(3800,"127.0.0.1");
// var solar2lunarData = solarLunar.solar2lunar(2015, 10, 8);// 输入的日子为公历
// var lunar2solarData = solarLunar.lunar2solar(2017, 11, 12);
// console.log(lunar2solarData);