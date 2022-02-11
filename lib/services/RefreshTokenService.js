class RefreshTokenService {
  handle = async (refresToken) => {
    try {
      const res = await axios.post(
        `https://accounts.zoho.com/oauth/v2/token?refresh_token=${refresToken}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=refresh_token`
      );

      return res.data;
    } catch {
      throw new Error("Problema no login");
    }
  };
}

module.exports = RefreshTokenService;
