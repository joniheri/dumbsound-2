// import joi
const joi = require("joi");

// import models
const { User, Transaction } = require("../../../models");
const transaction = require("../../../models/transaction");

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

// Function GetUsersBelongsToTransaction
exports.getUsersHasManyTransaction = async (req, res) => {
  try {
    // CheckDataFromMiddleware
    // const dataAutMiddleware = req.user;
    // EndCheckDataFromMiddleware

    const pathFile = process.env.PATCH_UPLOADS;

    let getDatas = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Transaction,
        as: "transaction",
        attributes: {
          exclude: ["createdAt", "updatedAt", "userId", "UserId"],
        },
      },
    });

    if (getDatas == null) {
      return res.send({
        status: "Response Failed",
        message: "Data is empty!",
      });
    }

    const parseJSON = JSON.parse(JSON.stringify(getDatas));

    getDatas = parseJSON.map((item) => {
      return {
        ...item,
      };
    });

    res.send({
      status: "Response Success",
      message: "Get data Success.",
      dataCount: getDatas.length,
      pathFile,
      data: getDatas,
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Get data Error!",
      error: error,
    });
  }
};
// End Function GetUsersBelongsToTransaction

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
    const dataAdd = req.body; //Data will Added

    // ChekcValidationInput
    const schema = joi.object({
      email: joi.string().email().min(6).required(),
      password: joi.string().min(6).required(),
      fullname: joi.string().min(1).required(),
      gender: joi.string().min(4).required(),
      phone: joi.string().min(10).required(),
      address: joi.string().min(2).required(),
      level: joi.string(),
    });
    const { error } = schema.validate(dataAdd);
    if (error) {
      return res.send({
        response: "Response Failed",
        status: error.details[0].message,
        data: dataAdd,
      });
    }
    // EndChekcValidationInput

    // CheckDplicateEmail
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
    // EndCheckDplicateEmail

    // AddData
    const dataAdded = await User.create(dataAdd);
    if (!dataAdded) {
      return res.send({
        response: "Response Failed",
        status: `Add data Failed!`,
      });
    }
    // EndAddData

    // GetDataAddedById
    const idAdded = dataAdded.id;
    const dataAddedById = await User.findOne({
      where: {
        id: idAdded,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (dataAddedById == null) {
      return res.send({
        response: "Response Failed",
        status: `Data with ID ${idAdded} Not Found!`,
      });
    }
    // EndGetDataAddedById

    res.send({
      response: "Response Success",
      status: "Add data Success.",
      dataAdded: dataAddedById,
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
      status: "Response Success",
      message: "Success.",
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Error!",
      error: error,
    });
  }
};
// End Template Function
