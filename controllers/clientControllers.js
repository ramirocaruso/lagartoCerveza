let Client = require("../models/Client");
let bcrypt = require("bcrypt-nodejs");
let jwt = require("../helpers/jwt")

let registerClient = async function (req, res) {
  let data = req.body;
  let clientArray = [];
  clientArray = await Client.find({ email: data.email });
  if (clientArray.length === 0) {
    if (data.password) {
      bcrypt.hash(data.password, null, null, async function (err, hash) {
        if (hash) {
          data.password = hash;
          let reg = await Client.create(data);
          res.status(200).send({ data: reg });
        } else {
          res.send({ message: "errServer", data: undefined });
        }
      });
    } else {
      res.send({ message: "no password", data: undefined });
    }
  } else {
    res.send({
      message: "the email already exists in the database",
      data: undefined,
    });
  }
};

let loginClient = async function (req, res) {
  let data = req.body;
  let clientArray = [];
  clientArray = await Client.find({ email: data.email });
  if (clientArray.length === 0) {
    res.send({ message: "no se encontro el email", data: undefined });
  } else {
    let user = clientArray[0];
    bcrypt.compare(data.password, user.password, async function (err, check) {
      if (check) {
        res.status(200).send({ data: user,
        token:jwt.createToken(user) });
      }
      else{
        res.send({message:"la contrasena no coincide", data:undefined})
      }
    });
  }
};

module.exports = {
  registerClient,
  loginClient,
};
