const {create} = require("../dao")
const {checkRole, ROLE_GATEWAY} = require("../../common")

module.exports = async (request, response) =>{
   checkRole(response, ROLE_GATEWAY)
   const body = request.body
   const log = {
     _id:crypto.randomUUID(),
     user:body.user,
     card:body.card,
     cardReader:body.cardReader,
     time:body.time
   } 
   await create(log)
   return log
}