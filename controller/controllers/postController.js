const { axios, BASE_URL, axiosConfig } = require("./util");

async function createContact(req, res) {
  let response = null;
  try {
    console.log("Creating");
    const data = {
      contact: {
        first_name: req.query.firstname,
        last_name: req.query.lastname,
        email: req.query.email,
        mobile_number: req.query.mobile,
      },
    };

    response = await axios.post(`${BASE_URL}/contacts`, data, axiosConfig);
  } catch (error) {
    response = error.response;
  } finally {
    res.json(response.data);
  }
}

module.exports = {
  createContact,
};

// curl - H "Authorization: Token token=sfg999666t673t7t82" -
//     H "Content-Type: application/json" -
//     d '{"sales_account":{"name":"Widgetz.io (sample)"} }' -
//     X POST "https://domain.freshsales.io/api/sales_accounts"
