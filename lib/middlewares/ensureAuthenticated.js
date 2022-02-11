const ensureAuthenticated = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).end();
  }

  next();
};

module.exports = ensureAuthenticated;
