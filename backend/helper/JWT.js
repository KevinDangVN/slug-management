const JWT = require("jsonwebtoken");

const genAccessToken = (userData) => {
  return JWT.sign(
    {
      iss: "OISP - Slug Management",
      userId: userData._id,
      role: userData.role,
      // exp: new Date().setDate(new Date().getDate() + 1)
    },
    process.env.ACCESS_TOKEN,
    {
      expiresIn: "30 days",
    }
  );
};

const genRefreshToken = (userData) => {
  return JWT.sign(
    {
      iss: "OISP - Slug Management",
      userId: userData._id,
      iat: new Date().getTime(),
    },
    process.env.REFRESH_TOKEN
  );
};

const verifyToken = (token, secretKey) => {
  return JWT.verify(token, secretKey, (err, data) => {
    if (err) return false;
    return data;
  });
};

module.exports = {
  genAccessToken,
  genRefreshToken,
  verifyToken,
};
