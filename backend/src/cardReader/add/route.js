const {compileValidation, route, OK, STRING_MAX} = require("../../common")
const abl  = require("./abl")

const validate = compileValidation({
    type: "object",
    properties: {
        name:{
            type:"string",
            minLength:1,
            maxLength:STRING_MAX
        }
    },
    additionalProperties:false,
    required:["name"]
})

module.exports = (req, res) => route(req, res, validate, OK, abl)