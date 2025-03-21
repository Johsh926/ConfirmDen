const { getConnectedClient } = require("../database");

const getCollection = () => {
  const client = getConnectedClient();
  const collection = client.db("confirmdendb").collection("facts");
  return collection;
};

module.exports = { getCollection };