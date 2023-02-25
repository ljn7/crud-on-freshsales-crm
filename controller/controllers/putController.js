const { axios, BASE_URL, axiosConfig } = require("./util");

async function updateContactById(req, res) {
  let response = null;
  try {
    const data = {
      contact: {
        first_name: req.query.firstname,
        last_name: req.query.lastname,
        email: req.query.email,
        mobile_number: req.query.mobile,
      },
    };
    console.log(`${BASE_URL}/contacts/${req.query.id}`);
    response = await axios.put(
      `${BASE_URL}/contacts/${req.query.id}`,
      data,
      axiosConfig
    );
  } catch (error) {
    response = error.response;
  } finally {
    res.json(response.data);
  }
}

module.exports = { updateContactById };
