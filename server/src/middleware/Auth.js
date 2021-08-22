const jwt = require("jsonwebtoken");

exports.AuthMiddleware = (req, res, next) => {
  try {
    let header = req.header("Authorization");

    if (!header) {
      return res.send({
        status: "Response Failed",
        message: "Access Denied",
      });
    }

    let token = header.replace("Bearer ", "");

    const secretKey = process.env.SECRET_KEY;

    const verified = jwt.verify(token, secretKey);

    // MakeDataUserToVariableUser
    req.user = verified;
    // EndMakeDataUserToVariableUser

    next();
  } catch (error) {
    console.log(error);
    return res.send({
      status: "Response Failed",
      message: "Login Failed!" + error,
    });
  }
};
