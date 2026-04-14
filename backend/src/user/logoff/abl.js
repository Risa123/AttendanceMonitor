const {logoff} = require("../dao")

module.exports = async request => await logoff(request.headers.authorization)