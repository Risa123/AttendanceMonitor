const {login} = require("../dao")


module.exports = async request =>{
   let auth = request.headers.authorization.split(":")
   return await login(auth[0], auth[1])
}