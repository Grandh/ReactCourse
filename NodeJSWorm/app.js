// 参考：http://blog.csdn.net/sjn0503/article/details/54409584
const path = require('path');
const url = require('url');
const fs = require('fs');

const superagent = require('superagent');  //用于处理客户端的请求模块，方便进行get/post网络请求
const cheerio = require('cheerio');  // Nodejs版本的Jquery
const eventproxy = require('eventproxy'); //控制并发的模块，管理一部操作
const promise = require('promise');
const async = require('async');

var targetUrl = 'https://cnodejs.org/';
var topicUrls = [];

function getTopicUrls(){
    return new Promise(function(resolve){
        superagent.get(targetUrl)
            .end(function(err,res){
                if(err) return console.log('error',err);
                var $ = cheerio.load(res.text);
                $('#topic_list .topic_title').each(function(index,element){
                    var href = url.resolve(targetUrl,$(element).attr('href'));
                    topicUrls.push(href);
                    resolve(topicUrls);
                });
        });
    });
};
getTopicUrls().then(function(topicUrls){
    var ep = new eventproxy();
    // eventproxy要先定义回调函数
    ep.after('crawled', topicUrls.length, function(topics){
        topics = topics.map(function(topicPair){
            var topicUrl = topicPair[0];
            var topicHtml = topicPair[1];
            var $ = cheerio.load(topicHtml);
            return({
                title: $('.topic_full_title').text(),
                href: topicUrl,
                comment:$('.reply_content .markdown-text').eq(0).text().trim()
            });
        });
        console.log('----------------------outcomes----------------------');
        console.log(topics);
        console.log('共获取结果' + topics.length + '条');
    });
    
    var curCount = 0;

    function concurrentGet(url,callback){
        var delay = parseInt((Math.random() * 3000000) % 1000,10);
        curCount ++;
        setTimeout(function(){
            console.log('现在的并发数是', curCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
            superagent.get(url)
                .end(function(err,res){
                    console.log('fetch--'+url+'--successfully');
                    ep.emit('crawled',[url,res.text]);
            });
            curCount --;
            callback(null,url+'Call back content');
        },delay);
    }

    async.mapLimit(topicUrls, 5 ,function(topicUrl, callback){
        concurrentGet(topicUrl,callback);
    });
})
