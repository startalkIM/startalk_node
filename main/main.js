var nodeConfig = require('../node_config.js');

exports.renderSubmenu = function(req, res, next) {
    var args = {
        pageTitle: nodeConfig.web.title || '在线客服',
        jquery: nodeConfig.jquery,
        webcss: nodeConfig.web.webcss,
        webjs: nodeConfig.web.webjs,
        nav: nodeConfig.navigation
    }

    res.render('navigation', args);  
};

exports.renderWeb = function(req, res, next) {
    var ipAddress = getClientIp(req) || '';
    var args = {
        ip: ipAddress,
        pageTitle: nodeConfig.web.title || '在线客服',
        jquery: nodeConfig.jquery,
        webcss: nodeConfig.web.webcss,
        webjs: nodeConfig.web.webjs,
        nav: nodeConfig.navigation
    }

    res.render('web', args);
    //res.render('testWeb', args);   
};

exports.renderTouch = function(req, res, next) {
    var ipAddress = getClientIp(req) || '';
    var args = {
        ip: ipAddress,
        pageTitle: nodeConfig.touch.title || '在线客服',
        jquery: nodeConfig.jquery,
        touchcss: nodeConfig.touch.touchcss,
        touchjs: nodeConfig.touch.touchjs,
        nav: nodeConfig.navigation
    }

    res.render('touch', args);
    //res.render('testTouch', args);
};

function getClientIp(req) {
    var ipAddress,
        forwardedIps,
        forwardedIpsStr = req.header('x-forwarded-for');
    if(forwardedIpsStr) {
        forwardedIps = forwardedIpsStr.split(',');
        ipAddress = forwardedIps[0];
    }
    if(!ipAddress) {
        ipAddress = req.connection.remoteAddress;
    }
    return ipAddress;
}