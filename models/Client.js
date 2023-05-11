
let mongoose = require("mongoose")
let schema = mongoose.Schema

let clientSchema = schema({
name:{ type: String, required:true},
age: {type : String , required:true},
country: {type : String , required:false},
email: {type : String , required:true},
password: {type : String , required:true},
profile: {type : String , required:false},
phone: {type :String, required:false},
sex: {type : String , required:false},
birthdate: {type : String , required:false},
dni: {type : String , required:false},
})


module.exports= mongoose.model("cliente", clientSchema)