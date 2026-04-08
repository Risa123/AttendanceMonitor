const {create} = require("../dao")


module.exports = async request =>{
   const cardReader = {
     _id:crypto.randomUUID(),
     name:request.name
   } 
   await create(cardReader)
   return cardReader
}