const express = require("express");
require("dotenv").config();
const cors = require("cors");
const dbConnection = require("./db/mongoConnect");

const contactsRouter = require("./routes/contacts");
const loginRouter = require("./routes/login");

const port = process.env.PORT || 5000;

const app = express();

dbConnection();

app.use(cors());
app.use(express.json());

app.use("/contacts", contactsRouter);
app.use("/login", loginRouter);

app.use((err, req, res, next) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }

  return res
    .status(500)
    .json({ status: "Error", message: "Internal Server Error" });
});

app.listen(port, () => console.log(`Server starts on port: ${port}`));
