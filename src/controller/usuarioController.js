const Usuario=require("../model/Usuario");


async function abreadd(req,res){
    res.render('usuario/add.ejs',{});

}

async function add(req,res){
    const{nome ,email ,senha, } = req.body;
    if(req.file != undefined){

        var foto = req.file.filename;
    }





    await Usuario.create({nome,email,senha,foto}).then((usuario)=>{
       res.send("Usuário" + usuario.nome+ " foi criado com sucesso!");
    });
    

}

async function list(req,res){
    await Usuario.findAll().then((usuarios) => {
    res.render("usuario/list.ejs",{Usuarios:usuarios})

    });
}
async function filtro(req,res){

}

async function abreedit(req,res){

}
async function edit(req,res){

}
async function del(req,res){}



module.exports= {abreadd, add,list, filtro, abreedit, edit, del}





