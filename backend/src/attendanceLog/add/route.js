const {compileValidation, route, OK, STRING_MAX} = require("../../common")
const abl  = require("./abl")

const validate = compileValidation({
    type: "object",
    properties: {
        user: {
            type:"string",
            format:"uuid"
        },
        cardReader:{
            type:"string",
            format:"uuid"
        }
    },
    additionalProperties:false,
    required:["user", "cardReader"]
})

module.exports = (req, res) => route(req, res, validate, OK, abl)