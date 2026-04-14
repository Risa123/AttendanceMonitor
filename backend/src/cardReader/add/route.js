const {compileValidation, route, OK} = require("../../common")
const abl  = require("./abl")

const validate = compileValidation({
    type: "object",
    properties: {
        name:{
            type:"string",
            minLength:1,
        },
        clientSecret: {
            type:"string",
            minLength:1
        }
    },
    additionalProperties:false,
    required:["name", "clientSecret"]
})

module.exports = (req, res) => route(req, res, validate, OK, abl)