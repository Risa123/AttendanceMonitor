const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../../common")

const { UserNotAuthorisedException } = require("../../database")
const { getUserByCredentials } = require("../dao")

module.exports = async request =>{
   const authHeader = request.headers.authorization
   if (!authHeader) {
      throw new UserNotAuthorisedException("no autorisation")
   }
   const credentials = authHeader.split(":")
   const user = await getUserByCredentials(credentials[0], credentials[1])
   if (!user) {
      throw new UserNotAuthorisedException("invalid credentials")
   }
   return jwt.sign(user, JWT_SECRET, {expiresIn:"1h"})
}