let jwt = require("jwt-simple")
let moment = require("moment")
let secret = "lagarto"

exports.createToken= (user) =>{
 let payload = {
    sub: user.id, 
    name: user.name,
    lastName: user.lastName,
    email: user.email,
iat:moment().unix(),
exp:moment().add(7,"days").unix
 }
 return jwt.encode(payload,secret)
}