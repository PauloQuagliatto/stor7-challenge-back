const axios = require("axios");

class OAuthService {
  handle = async (code) => {
    try {
      const res = await axios.post(
        `https://accounts.zoho.com/oauth/v2/token?grant_type=authorization_code&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=${process.env.REDIRECT_URL}&code=${code}`
      );

      return res.data;
    } catch {
      throw new Error("Problema no login");
    }
  };
}

module.exports = OAuthService;
