let express = require ("express")
let adminController = require("../controllers/adminControllers")

let router = express.Router()

router.post("/registerAdmin", adminController.registerAdmin)
router.post("/loginAdmin",adminController.loginAdmin)

module.exports= router