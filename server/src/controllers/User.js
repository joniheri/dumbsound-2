const { User } = require("../../models");

// get data Users route
exports.getUsers = async (req, res) => {
  try {
    const getUsers = await User.findAll();

    if (getUsers.length <= 0) {
      return res.send({
        response: "Response Failed",
        status: "Data is empty!",
      });
    }

    res.send({
      response: "Response Success",
      status: "Get data Success.",
      userLength: getUsers.length,
      data: getUsers,
    });
  } catch (error) {
    return res.send({
      response: "Response Failed",
      status: "Get data Failed.",
      error: error,
    });
  }
};
// End get Users route
