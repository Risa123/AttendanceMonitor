const {list} = require("../dao")
const {checkRole, ROLE_ADMIN} = require("../../common")


module.exports = async (_, response) => {
    checkRole(response, ROLE_ADMIN)
    return await list({})
}