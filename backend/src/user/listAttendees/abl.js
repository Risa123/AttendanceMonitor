const { ROLE_ATENDEE, ROLE_ADMIN, checkRole } = require("../../common")
const {list} = require("../dao")

module.exports = async (request, response) => {
   checkRole(response, ROLE_ADMIN)
   return await list({role:ROLE_ATENDEE})
}