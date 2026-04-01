const {MongoClient} = require("mongodb")

const CONNECTION = "mongodb+srv://AttendanceMonitor:test@somecluster.zryzm.mongodb.net/?appName=someCluster"
const mongo = new MongoClient(CONNECTION)

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