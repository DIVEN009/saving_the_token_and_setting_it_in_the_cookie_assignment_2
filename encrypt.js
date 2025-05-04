// encrypt.js

const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  // Generate JWT token with expiry of 1 hour
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};

module.exports = encrypt;
