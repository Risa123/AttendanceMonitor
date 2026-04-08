const {compileValidation, route, OK} = require("../../common")
const abl  = require("./abl")

const validate = compileValidation({
    type: "object",
    properties: {
        
    },
    additionalProperties:false,
})

module.exports = (req, res) => route(req, res, validate, OK, abl)