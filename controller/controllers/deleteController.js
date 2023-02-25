const { axios, BASE_URL, axiosConfig } = require("./util");

async function deleteContactById(req, res) {
  let response = null;
  try {
    response = await axios.delete(
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
  deleteContactById,
};
