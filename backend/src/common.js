const Ajv = require("ajv");
const {ObjectNotFoundException, UserNotAuthorisedException} = require("./database")

const ajv = new Ajv()
require("ajv-formats")(ajv)

const BAD_REQUEST = 400
const OK = 200
const INTERNAL_ERROR = 500
const CREATED = 201
const NOT_FOUND = 404
const UNAUTHORISED = 401

function compileValidation(scheme){
  return ajv.compile(scheme)
}

function route(req,res,validate,successCode,abl){
  if(validate(req.body)){
     if (req.headers.authorisation) {
      abl(req.body).then(data => res.status(successCode).json(data)).catch(e =>{
        if(e instanceof ObjectNotFoundException){
          console.error(e.message)
          res.status(NOT_FOUND).send(e.message)
        }else if(e instanceof UserNotAuthorisedException){
          console.error(e.message)
          res.status(UNAUTHORISED).send(e.message)
        }else{
         console.error(e.stack)
         res.sendStatus(INTERNAL_ERROR)
        }
      })
     } else {
       res.status(BAD_REQUEST).send("no autorisation")
       console.error("no autorisation")
     }
  }else{
    const errors = []
    for(const err of validate.errors){
      errors.push(err.message)
    }
    console.error("bad request: " + errors)
    res.status(BAD_REQUEST).send(errors)
  }
}

function post(app, name) {
  app.post("/" + name, require("./" + name + "/route"))
}

function get(app, name) {
   app.get("/" + name, require("./" + name + "/route"))
}

module.exports = {OK,CREATED,compileValidation,route, post, get}