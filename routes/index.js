var express = require('express');
var router = express.Router();
var main = require('../main/main');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'hello Qchat'
    });
});

router.get(/\/submenu/, function(req, res, next) {
    main.renderSubmenu(req, res, next);
});

router.post(/\/submenu/, function(req, res, next) {
    main.renderSubmenu(req, res, next);
});

router.get(/\/webchat\/web/, function(req, res, next) {
    main.renderWeb(req, res, next);
});

router.post(/\/webchat\/web/, function(req, res, next) {
    main.renderWeb(req, res, next);
});

router.get(/\/webchat\/touch/, function(req, res, next) {
    main.renderTouch(req, res, next);
});

router.post(/\/webchat\/touch/, function(req, res, next) {
    main.renderTouch(req, res, next);
});

// check_url，发布使用，不要删除
router.get('/check_url', function(req, res, next) {
    res.end('check_url ok');
});

router.all('*', function(req, res, next) {
    res.statusCode = 403;
    res.end('403');
});

module.exports = router;