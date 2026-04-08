const {compileValidation, route, OK, STRING_MAX} = require("../../common")
const abl  = require("./abl")

const validate = compileValidation({
    type: "object",
    properties: {
        user: {
            type:"string",
            format:"uuid"
        },
        card:{
            type:"string",
            format:"uuid"
        },
        cardReader:{
            type:"string",
            format:"uuid"
        },
        time:{
            type:"string",
            format:"date-time"
        }
    },
    additionalProperties:false,
    required:["user", "cardReader","time", "card"]
})

module.exports = (req, res) => route(req, res, validate, OK, abl)