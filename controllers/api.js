//路由控制器
const fs = require('fs')
//GET请求
exports.getApis = function(req, res, next) {
	const baseUrl = req.baseUrl
	fs.access ('.' + baseUrl + '.js', fs.constants.F_OK, (err) => {
		if (err){
			res.status(404).send('api error')
		} else {
			const event = require('..' + baseUrl).main('GET',req.body,res)
		}
	})
}
//POST请求
exports.createApi = function(req, res, next) {
	const baseUrl = req.baseUrl
	fs.access('.' + baseUrl + '.js', fs.constants.F_OK, (err) => {
		if (err) {
			res.status(404).send('api error')
		} else {
			const event = require('..' + baseUrl).main('POST',req.body,res)
		}
	})
}
