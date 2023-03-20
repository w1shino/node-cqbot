//主程序 启动命令:node main
const express = require("express")
const app = express()
const cors = require('cors')
const YAML = require('yaml')
const fs = require('fs')
const morgan = require('morgan')
const routes = require("./routes/api")
const config = YAML.parse(fs.readFileSync('config.yml', 'utf8'))

main()

app.use(morgan("dev"))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/favicon.ico', express.static('./favicon.ico'));

app.use("/service/*",routes)
.get("/", (req, res) => {
    res.status(200).send('node.cqbot')
}).use((req, res, next) => {
    res.status(401).send('没有访问权限')
})

function main () {
    console.log('[INFO]','将使用 config.yml 内的配置启动node-cqbot')
    app.listen(config.server.port,console.log('[INFO]','HTTP服务器已启动:',`http://localhost:` + config.server.port + '/'))
}
