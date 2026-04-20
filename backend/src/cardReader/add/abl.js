const {create} = require("../dao")
const {checkRole, ROLE_ADMIN} = require("../../common")


module.exports = async (request, response) =>{
   checkRole(response, ROLE_ADMIN)
   const cardReader = {
     _id:crypto.randomUUID(),
     name:request.body.name
   } 
   await create(cardReader)
   return cardReader
}