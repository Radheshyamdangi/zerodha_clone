// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.createSecretToken = (id) => {
//   return jwt.sign({ id }, process.env.TOKEN_KEY, {
//     expiresIn: 3 * 24 * 60 * 60,
//   });
// };

require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  if (!process.env.TOKEN_KEY) {
    throw new Error("TOKEN_KEY is not defined in environment variables");
  }

  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: "3d", // More readable
  });
};