
let mongoose = require("mongoose")
let schema = mongoose.Schema

let AdminSchema = schema({
name:{ type: String, required:true},
lastName: {type : String , required:false},
email: {type : String , required:true},
password: {type : String , required:true},
phone: {type :String, required:true},
rol: {type : String , required:true},
dni: {type : String , required:true},
})


module.exports= mongoose.model("administrador", AdminSchema)