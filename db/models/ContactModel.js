const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  zohoId: String,
  name: String,
  sequence_number: Number,
});

const Contact = mongoose.model("contact_roles", ContactSchema);

module.exports = Contact;
