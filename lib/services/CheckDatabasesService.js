const Contact = require("../../db/models/ContactModel");

class CheckDatabasesService {
  handle = async (zohoContacts) => {
    try {
      let mongoContacts;
      try {
        mongoContacts = await Contact.find();
      } catch {
        mongoContacts = [];
      }

      if (mongoContacts.length > 0) {
        zohoContacts.map(async (zohoContact) => {
          let exists = false;
          mongoContacts.map((mongoContact) => {
            if (mongoContact.zohoId === zohoContact.id) {
              exists = true;
            }
          });

          if (!exists) {
            const { id } = zohoContact;

            const newContact = await new Contact({
              ...zohoContact,
              zohoId: id,
            }).save();

            mongoContacts.push(newContact);
          }
        });
      } else if (mongoContacts.length === 0) {
        zohoContacts.map(async (zohoContact) => {
          const { id } = zohoContact;

          const newContact = await new Contact({
            ...zohoContact,
            zohoId: id,
          }).save();

          mongoContacts.push(newContact);
          console.log(mongoContacts);
        });
      }

      return mongoContacts;
    } catch (err) {
      throw new Error("Problema conectando com o banco de dados");
    }
  };
}

module.exports = CheckDatabasesService;
