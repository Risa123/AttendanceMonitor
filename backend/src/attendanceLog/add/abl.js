const {create} = require("../dao")


module.exports = async request =>{
   const log = {
     _id:crypto.randomUUID(),
     user:request.user,
     cardReader:request.cardReader
   } 
   await create(log)
   return log
}