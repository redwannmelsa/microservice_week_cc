const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'forbidden' });
      }

      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ message: 'unauthorized' })
  }
};

module.exports = verifyJWT;