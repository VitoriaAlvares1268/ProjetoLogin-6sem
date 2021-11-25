const express =  require("express");
const routes = express.Router();
const alunoController = require("../controller/alunoController")
const upload = require ("../config/multer");



// Abre add
routes.get("/add", alunoController.abreadd)

//Adiciona
routes.post("/add", upload.single('foto'), alunoController.add);


//List
routes.get("/",alunoController.list);

//List Filtro
routes.post("/",alunoController.filtro);



// Abre edit
routes.get("/edt",alunoController.abreedit);
// Edit
routes.post("/edt",alunoController.edit);



//Deletar
routes.get("/del/:id",alunoController.del);

module.exports = routes;