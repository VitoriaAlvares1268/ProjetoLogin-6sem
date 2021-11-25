const express =  require("express");
const routes = express.Router();
const usuarioController = require("../controller/usuarioController")
const upload = require ("../config/multer");



// Abre add
routes.get("/add", usuarioController.abreadd)

//Adiciona
routes.post("/add", upload.single('foto'), usuarioController.add);


//List
routes.get("/",usuarioController.list);

//List Filtro
routes.post("/",usuarioController.filtro);



// Abre edit
routes.get("/edt",usuarioController.abreedit);
// Edit
routes.post("/edt",usuarioController.edit);



//Deletar
routes.get("/del",usuarioController.del);

module.exports = routes;

