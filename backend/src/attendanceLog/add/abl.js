const {create} = require("../dao")


module.exports = async request =>{
   const log = {
     _id:crypto.randomUUID(),
     name:request.name,
     cardReader:request.cardReader
   } 
   await create(log)
   return log
}