//路由
const express = require("express")
const router = express()

//引入控制器
const {getApis,createApi} = require('../controllers/api')

router.route("/").get(getApis).post(createApi)

module.exports = router
