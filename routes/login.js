const express = require("express");
const loginRouter = express.Router();

const LoginController = require("../lib/controllers/LoginController");

const loginController = new LoginController();

//Get AccessToken Route
loginRouter.post("/oauth", loginController.handleOauthToken);

//Refresh AccessToken Route
loginRouter.post("/refresh-token", loginController.handleRefreshToken)

module.exports = loginRouter;
