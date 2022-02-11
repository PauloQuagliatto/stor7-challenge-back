const Contact = require("../../db/models/ContactModel");

class CreateMongoContactService {
  handle = async (contact) => {
    try {
      const doc = await new Contact(contact).save();
      const newContact = doc.toObject();

      return newContact;
    } catch (error) {
      res.status(500).json(error);
    }
  };
}

module.exports = CreateMongoContactService;
