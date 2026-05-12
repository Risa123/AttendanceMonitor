const {close, connect} = require("./database")
const {post, get, initApp} = require("./common")

const PORT = 8000

const app = initApp()


app.listen(PORT,() => {
    connect()
    console.log(`server listening on port ${PORT}`)
})

post(app, "attendanceLog/add", true)
get(app, "attendanceLog/list")
post(app, "cardReader/add", true)
get(app, "cardReader/list")
post(app, "user/login")
get(app, "user/listAttendees")

process.on("beforeExit", _ => close())