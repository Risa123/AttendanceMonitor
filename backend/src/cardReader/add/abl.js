const {create} = require("../dao")


module.exports = async request =>{
   const cardReader = {
     _id:crypto.randomUUID(),
     name:request.body.name
   } 
   await create(cardReader)
   return cardReader
}