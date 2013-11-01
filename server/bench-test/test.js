'use strict';

var request = require('request')
var should  = require('should')
var hostname = require('./config').host + ':' + require('./config').port

var times = 10000

var startTime = Date.now()
for (var i = 0, j = 0; i < times; i++) {
	request({
		url: hostname + '/api/test/signin',
		method: 'POST',
		jar: true,
		json: {}
	}, function (error, res, data) {
		res.statusCode.should.equal(200)
		j++
	})

	if ((j+1) === times) {
		console.log('times:', times)
		console.log('continue time: ', (Date.now() - startTime) / 1000, 's')
	}
}

