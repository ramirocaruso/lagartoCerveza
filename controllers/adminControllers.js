let Admin = require("../models/Admin.js");
let bcrypt = require("bcrypt-nodejs");
let jwt = require("../helpers/jwt.js")

let registerAdmin = async function (req, res) {
  let data = req.body;
  let adminArray = [];
  adminArray = await Admin.find({ email: data.email });
  if (adminArray.length === 0) {
    if (data.password) {
      bcrypt.hash(data.password, null, null, async function (err, hash) {
        if (hash) {

          data.password = hash;
          let reg = await Admin.create(data);

          res.status(200).send({ data: reg });
          
        } else{res.send({ message: "errServer", data: undefined })} 
      
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
let loginAdmin = async function (req, res) {
    let data = req.body;
    let adminArray = [];
    adminArray = await Admin.find({ email: data.email });
    if (adminArray.length === 0) {
      res.send({ message: "no se encontro el email", data: undefined });
    } else {
      let user = adminArray[0];
      bcrypt.compare(data.password, user.password, async function (err, check) {
        if (check) {
          res.status(200).send({ data: user,token:jwt.createToken(user)});
        }
        else{
          res.send({message:"la contrasena no coincide", data:undefined})
        }
      });
    }
  };
module.exports = {
  registerAdmin,
  loginAdmin
};
