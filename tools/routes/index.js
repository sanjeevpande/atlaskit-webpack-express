var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var restler = require('restler');
var ZapiClient = require('../common/zapi-client');

router.get('/public/rest/*', function(req, res, next) {

	var token = ZapiClient.getToken('/public/rest/api/1.0/zql/fields/values', 'GET');

    var headers = {
        'Authorization': 'JWT '+token,
        'zapiAccessKey': ACCESS_KEY,
        'User-Agent': 'ZAPI',
		'Content-Type': 'application/json'
    };
	
	restler.get(API_URI, {'headers': headers}).on('complete', function (data, response) {
        let statusCode = response ? response.statusCode : 500;
        res.writeHead(statusCode);
        data = data || {};
        res.end(JSON.stringify(data));
    });

});

/* GET home page. */
router.get('/*', function(req, res, next) {
	var indexFile = path.join(__dirname, '../../src/index.html');
	res.sendFile(indexFile);
});


module.exports = router;