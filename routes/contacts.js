const express = require("express");
const contactsRouter = express.Router();

const ensureAuthenticated = require("../lib/middlewares/ensureAuthenticated");
const ContactsController = require("../lib/controllers/ContactsController");

const contactsController = new ContactsController();

// Create a contacts route.
contactsRouter.post("/", ensureAuthenticated, contactsController.createContact);

// Read contactss route.
contactsRouter.get(
  "/list",
  ensureAuthenticated,
  contactsController.listContacts
);

// Update contacts route.
contactsRouter.put("/", ensureAuthenticated, contactsController.updateContact);

// Delete contacts route.
contactsRouter.delete(
  "/",
  ensureAuthenticated,
  contactsController.deleteContact
);

contactsRouter.get("/getcookies", (req, res) => {
  const cookies = req.cookies();
  console.log(cookies);
  res.json(cookies);
});

module.exports = contactsRouter;
