var express = require('express');
var cors = require('cors');
// var history = require('connect-history-api-fallback');

var app = express();
// 设置回调函数名字
app.set('jsonp callback name', 'cb');
app.use(cors());
// app.use(history());
// 静态资源处理
app.use(express.static('public'));
// app.use(express.static('dist127'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// 延迟响应请求 模拟网络差
// app.use(function (req, res, next) {
// 	setTimeout(() => {
// 		next();
// 	}, Math.random() * 1000);
// });

// 引入接口模块
app.use(require('./router/api'));
app.use(require('./router/map'));

app.listen(3000, () => console.log('running 3000'));