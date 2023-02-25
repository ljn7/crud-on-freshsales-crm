const { axios, BASE_URL, axiosConfig } = require("./util");

async function getAllContacts(req, res) {
  let response = null;
  try {
    response = await axios.get(
      `${BASE_URL}/contacts/view/26000445057`,
      axiosConfig
    );
  } catch (error) {
    response = error.response;
  } finally {
    res.json(response.data);
  }
}

async function getContactById(req, res) {
  let response = null;
  try {
    console.log(`${BASE_URL}/contacts/${req.query.id}`);
    response = await axios.get(
      `${BASE_URL}/contacts/${req.query.id}`,
      axiosConfig
    );
  } catch (error) {
    response = error.response;
  } finally {
    res.json(response.data);
  }
}

module.exports = {
  getAllContacts,
  getContactById,
};
