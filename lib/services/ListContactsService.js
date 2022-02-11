const api = require("./api");

class ListContactsService {
  handle = async (headers) => {
    try {
      const res = await api.get("Contacts/roles", {
        headers,
      });

      return res.data;
    } catch {
      throw new Error("Não foi possível resgatar contatos");
    }
  };
}

module.exports = ListContactsService;
