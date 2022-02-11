const Contact = require("../../db/models/ContactModel");

class DeleteMongoContactService {
  handle = async (_id) => {
    try {
      await Contact.deleteOne({ _id });

      return;
    } catch {
      throw new Error("Erro deletando do mongo");
    }
  };
}

module.exports = DeleteMongoContactService;
