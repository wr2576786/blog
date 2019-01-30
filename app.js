/**
 * 应用程序的启动（入口）文件
 */

var express = require('express');
//创建app应用 =>NodeJS Http.createServer();
var app = express();

//使用模板
var swig = require('swig');
//定义当前应用所使用的模板引擎
app.engine('html', swig.renderFile);

app.set('views', './views');
app.set('view engine', 'html');
// 开发过程中取消缓存 
swig.setDefaults({ cache: false });
//首页
app.get('/', (req, res) => {
    // res.send("欢迎进入博客");
    res.render('index');
})

//静态文件托管
app.use('/public', express.static( "public"));

//监听http请求
app.listen(8080);