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
    console.log('\x1B[33m[INFO]','将使用 config.yml 内的配置启动node-cqbot\x1B[0m')
    app.listen(config.server.port,console.log('\x1B[33m[INFO]','HTTP服务器已启动:',`http://localhost:` + config.server.port + '/\x1B[0m'))
    console.log('\x1B[33m[INFO]','使用 /app/config.yml 内的配置调用外部应用\x1B[0m')
}