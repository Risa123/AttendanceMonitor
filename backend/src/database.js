const {MongoClient} = require("mongodb")

const dns = require("dns");


const CONNECTION = "mongodb+srv://AttendanceMonitor:test@somecluster.zryzm.mongodb.net/?appName=someCluster"
const mongo = new MongoClient(CONNECTION)

dns.setServers(['8.8.8.8', '8.8.4.4']);

async function connect(){
  try{
    await mongo.connect()
    let database = mongo.db("AttendanceMonitor")
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

module.exports = {connect,close,ObjectNotFoundException}