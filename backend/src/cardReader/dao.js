const {getCardReaders} = require("../database")

async function create(cardReader)  {
    await getCardReaders().insertOne(cardReader)
}

async function list(filter) {
    return (await getCardReaders().find(filter)).toArray()
}

module.exports = {create, list}