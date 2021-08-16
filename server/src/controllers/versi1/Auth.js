const { User } = require("../../models");
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// RegisterAuth Function
exports.registerAuth = async (req, res) => {
  try {
    const data = req.body;

    // console.log(data);

    const schema = joi.object({
      fullname: joi.string().min(3).required(),
      email: joi.string().email().min(8).required(),
      password: joi.string().min(6).required(),
      gender: joi.string().min(4).required(),
      phone: joi.string().min(10).required(),
      address: joi.string().min(6).required(),
      level: joi.string().min(4),
    });

    const { error } = schema.validate(data);

    if (error) {
      return res.send({
        status: "Validate Failed",
        message: error.details[0].message,
        data: data,
      });
    }

    const { fullname, email, password, gender, phone, address, level } = data;

    // check "email user" is exist
    const findEmail = await User.findOne({
      where: {
        email: email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (findEmail) {
      return res.send({
        status: "Failed",
        message: `Email: ${email} already registered`,
        dataFindEmail: findEmail,
      });
    }
    // end check "email user" is exist

    // bcryptPassword
    const hashStrenght = 10;
    const hashedPassword = await bcrypt.hash(password, hashStrenght);
    // endBcryptPassword

    // input data to database
    const dataUser = await User.create({
      ...data,
      password: hashedPassword,
    });
    //  end input data to database

    // make token
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        id: dataUser.id,
      },
      secretKey
    );
    // end make token

    res.send({
      status: "Response Success",
      message: "Register Success",
      email: dataUser.email,
      name: dataUser.fullname,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      status: "Response Failed",
      message: "Register Failed",
      error: error,
    });
  }
};
// EndRegisterAuth Function

// LoginAuth
exports.loginAuth = async (req, res) => {
  try {
    const data = req.body;

    // console.log(data);

    const schema = joi.object({
      email: joi.string().email().min(8).required(),
      password: joi.string().min(6).required(),
    });

    const { error } = schema.validate(data);

    if (error) {
      return res.send({
        status: "Validate Failed",
        message: error.details[0].message,
        data: data,
      });
    }

    const { email, password } = data;

    // check "email" is exist
    const findEmail = await User.findOne({
      where: {
        email: email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!findEmail) {
      return res.send({
        status: "Failed",
        message: `The Email or Password you entered does not match!`,
      });
    }
    // end check "email" is exist

    // check "password" is match with email
    const findPassword = await bcrypt.compare(password, findEmail.password); //--> this is check password in body is macth to password in database
    if (!findPassword) {
      return res.send({
        status: "Failed",
        message: `The Email or Password you entered does not match!`,
        passwordBycript: findPassword,
      });
    }
    // end check "password" is match with email

    // bcryptPassword
    const hashStrenght = 10;
    const hashedPassword = await bcrypt.hash(password, hashStrenght);
    // endBcryptPassword

    // make token
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        id: findEmail.id,
      },
      secretKey
    );
    // end make token

    res.send({
      status: "Response Success",
      message: "Login Success",
      email: findEmail.email,
      name: findEmail.fullname,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      status: "Response Failed",
      message: "Login Failed",
      error: error,
    });
  }
};
// EndLoginAuth

// CheckAuth
exports.checkAuth = async (req, res) => {
  try {
    const userId = req.user.id;

    // check "email user" is exist
    const dataUser = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (!dataUser) {
      return res.send({
        status: "Failed",
        message: "User not found!",
      });
    }

    res.send({
      status: "Response Success",
      message: "User Valid",
      dataUser: dataUser,
    });
  } catch (error) {
    console.log(error);
    res.status({
      status: "Response Failed",
      message: "Server Error",
    });
  }
};
// EndCheckAuth
