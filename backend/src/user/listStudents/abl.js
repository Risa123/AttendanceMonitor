const {list} = require("../dao")

module.exports = async request => await list({role:"student"})