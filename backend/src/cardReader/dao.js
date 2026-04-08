const {getAttendanceLog} = require("../database")

async function create(log)  {
    await getAttendanceLog().insertOne(log)
}

async function list(filter) {
    return (await getAttendanceLog().find(filter)).toArray()
}

module.exports = {create, list}