const {create} = require("../dao")
const {checkRole, ROLE_GATEWAY} = require("../../common")

module.exports = async (request, response) =>{
   checkRole(response, ROLE_GATEWAY)
   const headers = request.headers
   const log = {
     _id:crypto.randomUUID(),
     user:null,
     card:headers.rfid,
     cardReader:null,
     time:headers.time
   } 
   await create(log)
   return log
}