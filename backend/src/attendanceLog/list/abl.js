const {list} = require("../dao")


module.exports = async request => {
   console.log(request.header)
   return await list({})
}