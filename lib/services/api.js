const axios = require("axios");

const api = axios.create({
  baseURL: "https://www.zohoapis.com/crm/v2",
});

module.exports = api;
