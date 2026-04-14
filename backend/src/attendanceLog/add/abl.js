const {create} = require("../dao")


module.exports = async request =>{
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