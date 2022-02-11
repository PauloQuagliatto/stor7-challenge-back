const OAuthService = require("../services/OAuthService");
const RefreshTokenService = require("../services/RefreshTokenService");

class LoginController {
  handleOauthToken = async (req, res) => {
    const { code } = req.body;
    const oAuthService = new OAuthService();

    try {
      const response = await oAuthService.handle(code);

      return res.send(response);
    } catch {
      return res.status(400).json({ error: "Problemas de autenticação" });
    }
  };

  handleRefreshToken = async (req, res) => {
    const { refresToken } = req.cookie();

    const refreshTokenService = new RefreshTokenService();

    const response = await refreshTokenService.handle(refresToken);

    return res.json(response);
  };
}

module.exports = LoginController;
