const express = require("express")
const {close, connect} = require("./database")
const {post, get} = require("./common")

const PORT = 8000
const app = express()

app.use(require("cors")())
app.use(express.json())

app.listen(PORT,() => {
    connect()
    console.log(`server listening on port ${PORT}`)
})

post(app, "attendanceLog/add")
get(app, "attendanceLog/list")

process.on("beforeExit", _ => close())