const {create} = require("../dao")


module.exports = async request =>{
   const log = {
     _id:crypto.randomUUID(),
     user:request.user,
     card:request.card,
     cardReader:request.cardReader,
     time:request.time
   } 
   await create(log)
   return log
}