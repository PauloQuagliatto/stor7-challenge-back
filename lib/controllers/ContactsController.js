const CreateContactService = require("../services/CreateContactService");
const CreateMongoContactService = require("../services/CreateMongoContactService");
const ListContactsService = require("../services/ListContactsService");
const CheckDatabasesService = require("../services/CheckDatabasesService");
const UpdateContactService = require("../services/UpdateContactService");
const UpdateMongoContactService = require("../services/UpdateMongoContactService");
const DeleteContactService = require("../services/DeleteContactService");
const DeleteMongoContactService = require("../services/DeleteMongoContactService");

class ContactsController {
  async createContact(req, res) {
    const { authorization } = req.headers;
    const contact = req.body;
    const headers = { Authorization: `Zoho-oauthtoken ${authorization}` };
    try {
      const createContactsService = new CreateContactService();

      const zohoId = await createContactsService.handle(headers, contact);

      const createMongoContactService = new CreateMongoContactService();

      const newContact = await createMongoContactService.handle({
        zohoId,
        ...contact,
      });

      return res.send(newContact);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  async listContacts(req, res) {
    const { authorization } = req.headers;
    const headers = { authorization: `Zoho-oauthtoken ${authorization}` };
    try {
      const listContactsService = new ListContactsService();

      const response = await listContactsService.handle(headers);

      const checkDatabasesService = new CheckDatabasesService();

      const contacts = await checkDatabasesService.handle(
        response.contact_roles
      );

      return res.send(contacts);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  async updateContact(req, res) {
    const { authorization } = req.headers;
    const { contact } = req.body;
    const headers = { authorization: `Zoho-oauthtoken ${authorization}` };
    try {
      const updateContactsService = new UpdateContactService();

      await updateContactsService.handle(headers, contact);

      const updateMongoContactService = new UpdateMongoContactService();

      await updateMongoContactService.handle(contact);
      return res.send("Atualizado");
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  async deleteContact(req, res) {
    const { authorization } = req.headers;
    const { mongoId, zohoId } = req.body;

    const headers = { authorization: `Zoho-oauthtoken ${authorization}` };
    try {
      const deleteContactsService = new DeleteContactService();

      await deleteContactsService.handle(headers, zohoId);

      const deleteMongoContactService = new DeleteMongoContactService();

      await deleteMongoContactService.handle(mongoId);

      return res.status(200).send("Contato deletado");
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}

module.exports = ContactsController;
