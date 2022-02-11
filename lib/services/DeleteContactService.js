const api = require("./api");

class DeleteContactService {
  handle = async (headers, zohoId) => {
    try {
      const res = await api.delete(`Contacts/roles/${zohoId}`, {
        headers,
      });

      return res.data;
    } catch {
      throw new Error("Não foi possível criar o contato");
    }
  };
}

module.exports = DeleteContactService;
