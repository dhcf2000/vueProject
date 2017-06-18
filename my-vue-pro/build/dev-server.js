//检查nodeJS版本和npm版本
require('./check-versions')()

//获取配置
var config = require('../config')

if (!process.env.NODE_ENV) {
  //如node的环境变量中没有设置当前的环境(NODE_ENV),则使用config中的配置作为当前的环境
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

//一个可以调用默认软件打开网址、图片、文件等内容的插件
var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')

//自配置路由------------------
var router = require('./router/routes');


//一个express中间件,用于将http请求代理到其他服务器,如lodal:8080/api/xxx --> localhost:3000/api/xxx
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port

// automatically open browser, if not set will be false
//用于判断是否要自动打开浏览器的布尔值变量,fasle不打开 true自动 config.dev.autoOpenBrowser在config/index文件dev{}中
var autoOpenBrowser = !!config.dev.autoOpenBrowser

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
//定义HTTP代理表,代理到API服务器 config.dev.proxyTable 在config/index文件dev{}中配置
var proxyTable = config.dev.proxyTable

var app = express()

//根据webpack配置文件创建compiler对象 [kəmˈpaɪlɚ](汇编者)
var compiler = webpack(webpackConfig)

//webpack-dev-middleware使用compiler对象来对相应的文件进行编译和绑定
//编译绑定后将得到的产物存放在内存中而没有写进磁盘
//将这个中间件交给express使用之后即可访问这些编译后的产品文件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

//用于实现热加载功能中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})

// force page reload when html-webpack-plugin template changes
//当html-webpack-plugin提交之后通过热重载中间件发布重载动作使得页面重载
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
//将prosyTable中的代理请求配置挂载的express服务器上
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
//重定向不存在的url,常用于SPA
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
//将热重载中间件挂载到express服务器上
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

/*自加的客服端请求start------------------------------------*/
app.use('/',router)
/*app.get('/proMovie',function(req,res){
  res.send({'msg':[{'text':"vue实例",'src':"aaa"},{'text':"详情",'src':"bbb"}]})
  //res.redirect('/index');
});*/

/*app.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Orgin',"*");
  res.header('Access-Control-Allow-Headers',"X-Requested-With");
  res.header('Access-Control-Allow-Methods',"PUT,POST,GET,DELETE,OPTIONS");
  res.header('X-Powered-By',"3.2.1");
  res.header('Content-Type',"application/json;charset=utf-8");
})*/
/*客户端请求end*/

// serve pure static assets
//静态资源的路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

//Promise ES6新特性 javaScript中内置的延迟对象
var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
//webpack开发中间件合法之后输出提示语到控制台,表明服务器已启动
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
