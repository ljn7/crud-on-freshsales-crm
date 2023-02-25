const express = require("express");
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
} = require("./controller/controller");

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// Create a new contact
app.post("/contacts/create", createContact);

// Get all contacts
app.get("/contacts", getAllContacts);

// Get a contact by ID
app.get("/contacts/findById", getContactById);

// Update a contact by ID
app.put("/contacts/updateById", updateContactById);

// Delete a contact by ID
app.delete("/contacts/delete:id", deleteContactById);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
