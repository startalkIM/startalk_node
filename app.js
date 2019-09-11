var express = require('express');
var exphbs = require('express-handlebars')
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression')
var proxy = require('http-proxy-middleware');
var nodeConfig = require('./node_config');

// 路由
var routes = require('./routes/index');

// 初始化express
var app = express();

// 默认布局
var hbs = exphbs.create({
    defaultLayout: 'main',
    // 分区目录
    partialsDir: [
        'views/partials/'
    ]
});

// engine函数 注册hbs
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/http-bind', proxy({target: 'http://' + nodeConfig.xmpp, changeOrigin: true}));
app.use('/file', proxy({target: nodeConfig.fileurl, changeOrigin: true}));
app.use('/qcadmin/api', proxy({ 
    target: nodeConfig.apiurl,
    changeOrigin: true, 
    pathRewrite:{
        '/qcadmin/api': '', // rewrite path
    }
}));
app.use('/newapi', proxy({ 
    target: nodeConfig.httpurl,
    changeOrigin: true, 
    pathRewrite:{
        '/newapi': '', // rewrite path
    }
}));
app.use('/api', proxy({ 
    target: nodeConfig.httpurl,
    changeOrigin: true, 
    pathRewrite:{
        '/api': '', // rewrite path
    }
}));
app.use('/package', proxy({ 
    target: nodeConfig.javaurl,
    changeOrigin: true, 
    pathRewrite:{
        '/package': '', // rewrite path
    }
}));

app.use(favicon(__dirname + '/favicon.ico'));
app.enable('trust proxy');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.use(function(req, res, next) {
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('X-Powered-By', 'QXF');
    next();
});

// 路由规则
app.use('/', routes);

module.exports = app;
