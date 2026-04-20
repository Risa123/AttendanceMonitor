const {getUsers} = require("../database")

async function list(filter) {
  return await (await getUsers().find(filter)).toArray()
}

async function getUserByCredentials(name, password) {
  return await getUsers().findOne({name: name, password: password})
}

module.exports = {list, getUserByCredentials}