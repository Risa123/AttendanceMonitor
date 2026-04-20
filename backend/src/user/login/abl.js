const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../../common")

const { UserNotAuthorisedException } = require("../../database")
const { getUserByCredentials } = require("../dao")

module.exports = async request =>{
   const auth = request.headers.authorization.split(":")
   const user = await getUserByCredentials(auth[0], auth[1])
   if (!user) {
      throw new UserNotAuthorisedException("invalid credentials")
   }
   return jwt.sign(user, JWT_SECRET, {expiresIn:"1h"})
}