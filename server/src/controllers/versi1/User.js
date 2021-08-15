const { User } = require("../../../models");

// Function GetUsers
exports.getUsers = async (req, res) => {
  try {
    const getUsers = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (getUsers == null) {
      return res.send({
        response: "Response Failed",
        status: "Data is empty!",
      });
    }

    res.send({
      response: "Response Success",
      status: "Get data Success.",
      dataCount: getUsers.length,
      data: getUsers,
    });
  } catch (error) {
    return res.send({
      response: "Response Failed",
      status: "Get data Error!",
      error: error,
    });
  }
};
// End Function GetUsers

//  Function GetUserById
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const getUser = await User.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (getUser == null) {
      return res.send({
        response: "Response Failed",
        status: `Data with id ${id} Not Found!`,
        data: null,
      });
    }

    res.send({
      response: "Response Success",
      status: "Get data Success.",
      idParam: id,
      data: getUser,
    });
  } catch (error) {
    return res.send({
      response: "Response Failed",
      status: "Get data Error!",
      error: error,
    });
  }
};
// End Function GetUserById

// Function AddUser
exports.addUser = async (req, res) => {
  try {
    // check the same email
    const emailBody = req.body.email;
    const checkEmail = await User.findOne({
      where: {
        email: emailBody,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (checkEmail != null) {
      return res.send({
        response: "Response Failed",
        status: `Data with email ${emailBody} is already exist!`,
      });
    }
    // end check the same email

    // AddData
    const dataAdded = req.body; //Data will Added
    const addData = await User.create(dataAdded);
    if (!addData) {
      return res.send({
        response: "Response Failed",
        status: `Add data Failed!`,
      });
    }
    // EndAddData

    res.send({
      response: "Response Success",
      status: "Add data Success.",
      dataAdded: addData,
    });
  } catch (error) {
    return res.send({
      response: "Response Failed",
      status: "Add Data Error!",
      error: error,
    });
  }
};
// End Function AddUser

// Function UpdateUser
exports.updateUser = async (req, res) => {
  try {
    const idParam = req.params.idparam;

    // CheckDataById
    const getUserById = await User.findOne({
      where: {
        id: idParam,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (getUserById == null) {
      return res.send({
        response: "Response Failed",
        status: `Data with id ${idParam} Not Found!`,
        data: null,
      });
    }
    // EndCheckDataById

    // check the same email
    const emailBody = req.body.email;
    const checkEmail = await User.findOne({
      where: {
        email: emailBody,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (checkEmail != null) {
      return res.send({
        response: "Response Failed",
        status: `Data with email ${emailBody} is already exist!`,
      });
    }
    // end check the same email

    // UpdateData
    const dataUpdate = req.body; //Data will updated
    const updateData = await User.update(dataUpdate, {
      where: {
        id: idParam,
      },
    });
    // EndUpdateData

    // getUserAfterUpdateById
    const getUserAfterUpdateById = await User.findOne({
      where: {
        id: idParam,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (getUserAfterUpdateById == null) {
      return res.send({
        response: "Response Failed",
        status: `Data with id ${idParam} Not Found!`,
        data: null,
      });
    }
    // EndgetUserAfterUpdateById

    res.send({
      response: "Response Success",
      status: "Update data Success.",
      idParam: idParam,
      dataUpdated: getUserAfterUpdateById,
    });
  } catch (error) {
    return res.send({
      response: "Response Failed",
      status: "Update Error!",
      error: error,
    });
  }
};
// End Function UpdateUser

// Function DeleteUser
exports.deleteUser = async (req, res) => {
  try {
    const idParam = req.params.idparam;

    // CheckDataById
    const getUserById = await User.findOne({
      where: {
        id: idParam,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (getUserById == null) {
      return res.send({
        response: "Response Failed",
        status: `Data with id ${idParam} Not Found!`,
        data: null,
      });
    }
    // EndCheckDataById

    // DeleteData
    const deleteData = await User.destroy({
      where: {
        id: idParam,
      },
    });
    if (!deleteData) {
      return res.send({
        response: "Response Failed",
        status: `Delete data Failed!`,
        data: null,
      });
    }
    // EndDelete

    res.send({
      response: "Response Success",
      status: "Delete data Success.",
    });
  } catch (error) {
    return res.send({
      response: "Response Failed",
      status: "Delete Error!",
      error: error,
    });
  }
};
// End Function DeleteUser

// Template Function
exports.templateFunction = async (req, res) => {
  try {
    res.send({
      response: "Response Success",
      status: "Success.",
    });
  } catch (error) {
    return res.send({
      response: "Response Failed",
      status: "Error!",
      error: error,
    });
  }
};
// End Template Function
