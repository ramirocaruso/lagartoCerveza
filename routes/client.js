
let express = require ("express")
let clienteController = require("../controllers/clientControllers")

let router = express.Router()

router.post("/registerClient", clienteController.registerClient)
router.post("/loginClient", clienteController.loginClient)

module.exports= router