const Ajv = require("ajv");
const {ObjectNotFoundException, UserNotAuthorisedException} = require("./database")

const ajv = new Ajv()
require("ajv-formats")(ajv)

const express = require("express")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")

const BAD_REQUEST = 400
const OK = 200
const INTERNAL_ERROR = 500
const CREATED = 201
const NOT_FOUND = 404
const UNAUTHORISED = 401
const FORBIDDEN = 403

const JWT_SECRET = "my super secret jwt"
const ROLE_ADMIN = "admin"
const ROLE_GATEWAY = "gateway"
const ROLE_ATENDEE = "attendee"

function initApp() {
  const app = express()
  app.use(require("cors")())
  app.use(express.json())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  return app
}

function compileValidation(scheme){
  return ajv.compile(scheme)
}

function route(req,res,validate,successCode,abl){
  if(validate(req.body)){
    abl(req,res).then(data => res.status(successCode).json(data)).catch(e =>{
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
  }else{
    const errors = []
    for(const err of validate.errors){
      errors.push(err.message)
    }
    console.error("bad request: " + errors)
    res.status(BAD_REQUEST).send(errors)
  }
}

function post(app, name, protected) {
  if (protected) {
    app.post("/" + name,authentificate,require("./" + name + "/route"))
  } else {
    app.post("/" + name,require("./" + name + "/route"))
  }
}

function get(app, name) {
   app.get("/" + name, authentificate, require("./" + name + "/route"))
}

function authentificate(req, res, next) {
  const auth = req.headers.authorization
  if (!auth) {
    return res.status(UNAUTHORISED).send("missing token")
  }
  try {
    const splitAuth = auth.split(" ")
    if (splitAuth.length !== 2 || splitAuth[0] !== "Bearer") {
        console.error("invalid token")
        return res.status(FORBIDDEN).send("invalid token")
    }
    res.locals.user = jwt.verify(splitAuth[1], JWT_SECRET)
    next()
  } catch (e) {
    console.error(e)
    return res.status(FORBIDDEN).json("invalid or expired token");
  }
}

function checkRole(res, role) {
   if (res.locals.user.role !== role) {
      throw new UserNotAuthorisedException("this request requires role " + role)
   }
}

module.exports = {OK,CREATED,compileValidation,route, post, get, initApp, JWT_SECRET, checkRole, ROLE_ADMIN, ROLE_GATEWAY, ROLE_ATENDEE}