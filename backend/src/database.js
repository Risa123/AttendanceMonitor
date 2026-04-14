const {MongoClient} = require("mongodb")

const dns = require("dns");

const CONNECTION = "mongodb+srv://AttendanceMonitor:test@somecluster.zryzm.mongodb.net/?appName=someCluster"
const mongo = new MongoClient(CONNECTION)

dns.setServers(["8.8.8.8", "8.8.4.4"])

let database = null
let attedanceLog = null
let cardReaders = null
let users = null

async function connect(){
  try{
    await mongo.connect()
    database = mongo.db("AttendanceMonitor")
    attedanceLog = database.collection("attedanceLog")
    cardReaders = database.collection("cardReaders")
    users = database.collection("users")
  }catch(e){
    await close()
    throw e
  }
}

async function close(){
 await mongo.close()
}

class ObjectNotFoundException extends Error{
  constructor(message){
    super(message)
  }
}

class UserNotAuthorisedException extends Error{
   constructor(message) {
     super(message)
   }
}

function getAttendanceLog() {
   return attedanceLog
}

function getCardReaders() {
  return cardReaders
}

function getUsers() {
  return users
} 

module.exports = {connect,close,ObjectNotFoundException, getAttendanceLog, UserNotAuthorisedException, getCardReaders, getUsers}