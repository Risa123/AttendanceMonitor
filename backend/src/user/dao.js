const {getUsers, ObjectNotFoundException} = require("../database")

async function login(name, password) {
  const authToken = crypto.randomUUID()
  const result = await getUsers().updateOne({name:name, password:password},{"$set":{authToken: authToken}})
  if (result.matchedCount == 0) {
    throw new ObjectNotFoundException("user not found")
  }
  return authToken
}

async function logoff(token) {
    const result = await getUsers().updateOne({authToken: token},{"$set":{authToken: null}})
    if (result.matchedCount == 0) {
      throw new ObjectNotFoundException("user not found")
    }
}

async function list(filter) {
  return await (await getUsers().find(filter)).toArray()
}

module.exports = {login, logoff, list}