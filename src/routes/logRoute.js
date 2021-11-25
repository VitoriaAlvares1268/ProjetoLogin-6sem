const express =  require("express");
const routes = express.Router();
const logController = require("../controller/logController");

// Abre tela login
routes.get("/", logController.abrelog);

//Logar
routes.post("/", logController.log);
module.exports = routes;