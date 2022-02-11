const api = require("./api");

class UpdateContactService {
  handle = async (headers, contact) => {
    try {
      if (contact.sequence_number) {
        await api.put(
          `Contacts/roles/${contact.zohoId}`,
          {
            contact_roles: [
              {
                id: contact.zohoId,
                sequence_number: contact.sequence_number,
                name: contact.name,
              },
            ],
          },
          {
            headers,
          }
        );

        return;
      } else {
        await api.put(
          `Contacts/roles/${contact.zohoId}`,
          {
            contact_roles: [
              {
                id: contact.zohoId,
                name: contact.name,
              },
            ],
          },
          {
            headers,
          }
        );

        return;
      }
    } catch {
      throw new Error("Não foi possível criar o contato");
    }
  };
}

module.exports = UpdateContactService;
