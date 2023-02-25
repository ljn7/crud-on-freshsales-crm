const {
  getAllContacts,
  getContactById,
} = require("./controllers/getController");
const { updateContactById } = require("./controllers/putController");
const { createContact } = require("./controllers/postController");
const { deleteContactById } = require("./controllers/deleteController");

module.exports = {
  getAllContacts,
  getContactById,
  updateContactById,
  createContact,
  deleteContactById,
};
