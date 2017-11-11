var fs = require("fs");
console.log("我是moudles里面的文件");  // 被调研时先执

fs.readFile("../resources/text/text1.txt",(err,data)=>{
    console.log(data);
});
exports.m = 10; //被调用后成为目标的属性
exports.fun = ()=>{
    console.log("haha");
};