//接收go-cqhttp请求
const fs = require('fs')
const path = require('path');

exports.main = function (type, req, res) {
    res.status(200).json({code:0})
    fs.readdir(path.resolve('app/'), function(err, files) {
        if (files.length != 0) {
            for (var i1 = 0; i1<files.length; i1++) {
                if (files[i1].slice(-3) == '.js') {
                    require('../app/' + files[i1]).main(req)
                }
            }
        }
    })
}
