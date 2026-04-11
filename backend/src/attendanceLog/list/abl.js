const {list} = require("../dao")


module.exports = async request => {
   return await list({})
}