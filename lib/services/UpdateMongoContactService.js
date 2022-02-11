const Contact = require("../../db/models/ContactModel");

class UpdateMongoContactService {
  handle = async (contact) => {
    try {
      await Contact.updateOne({ _id: contact._id }, contact);

      return;
    } catch (error) {
      throw new Error("Não foi possível atualizar contato no mongo");
    }
  };
}

module.exports = UpdateMongoContactService;
