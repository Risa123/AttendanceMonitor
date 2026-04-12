const {compileValidation, route, OK} = require("../../common")
const abl  = require("./abl")

const validate = compileValidation({})

module.exports = (req, res) => route(req, res, validate, OK, abl)