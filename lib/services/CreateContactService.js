const api = require("./api");

class CreateContactService {
  handle = async (headers, contact) => {
    try {
      const res = await api.post(
        "Contacts/roles",
        { contact_roles: [contact] },
        {
          headers,
        }
      );

      const zohoId = res.data.contact_roles[0].details.id;

      return zohoId;
    } catch (err) {
      console.log("erro: " + err);
      throw new Error("Não foi possível criar o contato");
    }
  };
}

module.exports = CreateContactService;
