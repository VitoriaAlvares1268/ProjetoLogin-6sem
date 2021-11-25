const express =  require("express");
const app = express();
const path = require("path");
const session =require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const passport1 = require("passport");
const autenticacao= require("./config/autenticacao");
const aut = require("./config/aut");

/// Importação de rotas 


const usuarioRoute = require("./routes/usuarioRoute");
const alunoRoute = require("./routes/alunoRoute");
const loginRoute = require("./routes/loginRoute");
const logRoute = require("./routes/logRoute");
require("./database/index");

app.use(session({secret: "secret", saveUninitialized:true, resave: true}));

app.use(flash());

app.use(passport.initialize());

app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views",  "./src/views");


app.use("/admin/usuario", autenticacao.autenticacao() ,usuarioRoute);
app.use("/admin", loginRoute);

app.use("/admin1/aluno", aut.aut(), alunoRoute);
app.use("/admin1", logRoute);


app.use(express.static(path.join(__dirname,  "public")));

app.listen(3000, function(req, res){
    console.log("Servidor Funcionando!");
});