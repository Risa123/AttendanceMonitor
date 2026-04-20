const {list} = require("../dao")
const {ROLE_ADMIN, checkRole} = require("../../common")


module.exports = async (_, response) => {
    checkRole(response, ROLE_ADMIN)
    return await list({})
}