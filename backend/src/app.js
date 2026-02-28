const express = require("express")
const {close, connect} = require("./database")

const PORT = 8000
const app = express()

app.use(require("cors")())
app.use(express.json())

app.listen(PORT,() => {
    connect()
    console.log(`server listening on port ${PORT}`)
})

process.on("beforeExit", _ => close())