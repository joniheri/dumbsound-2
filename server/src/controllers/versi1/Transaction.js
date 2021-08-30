const { Transaction, User } = require("../../../models");

const joi = require("joi");

// Function GetUsersBelongsToTransaction
exports.getTransactionsHasManyUser = async (req, res) => {
  try {
    // CheckDataFromMiddleware
    // const dataAutMiddleware = req.user;
    // EndCheckDataFromMiddleware

    const pathFile = process.env.PATCH_UPLOADS;

    let getDatas = await Transaction.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "UserId"],
      },
      include: {
        model: User,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
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
        attache: pathFile + item.attache,
      };
    });

    res.send({
      status: "Response Success",
      message: "Get data Success.",
      dataCount: getDatas.length,
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

// Function Pay
exports.Pay = async (req, res) => {
  try {
    const dataAdd = req.body; //Data will Added

    // // ChekcValidationInput
    // const schema = joi.object({
    //   startDate: joi.string().min(6).required(),
    //   dueDate: joi.string().min(6).required(),
    //   userId: joi.string().min(1).required(),
    //   attache: joi.string().min(3).required(),
    //   status: joi.string().min(3).required(),
    // });
    // const { error } = schema.validate(dataAdd);
    // if (error) {
    //   return res.send({
    //     status: "Validate Failed",
    //     message: error.details[0].message,
    //     data: dataAdd,
    //   });
    // }
    // // EndChekcValidationInput

    // ModifValueDataInput;
    // const attache = req.files.imageFile[0].filename;
    // const dataWithUpload = {
    //   ...dataAdd,
    //   //   attache,
    // };
    // console.log("dataWithUpload: ", dataAdd);
    // ModifValueDataInput

    // AddData
    const dataAdded = await Transaction.create(dataAdd);
    if (!dataAdded) {
      return res.send({
        status: "Response Failed",
        message: `Add data Failed!`,
      });
    }
    // EndAddData

    // // GetDataById;
    // const idMusic = dataAdded.id;
    // const getData = await Music.findOne({
    //   where: {
    //     id: idMusic,
    //   },
    //   attributes: {
    //     exclude: ["createdAt", "updatedAt", "artistId", "ArtistId"],
    //   },
    // });
    // if (getData == null) {
    //   return res.send({
    //     status: "Response Failed",
    //     message: `Data with id ${idMusic} Not Found!`,
    //     data: null,
    //   });
    // }
    // // GetDataById

    res.send({
      status: "Response Success",
      message: "Add data Success.",
      dataAdded: dataAdded,
    });
  } catch (error) {
    return res.send({
      status: "Response Failed",
      message: "Transaction pay Failed!",
      error: error,
    });
  }
};
// End Function Pay

// Function Template
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
// End Function Template
