const Aluno=require("../model/Aluno");
const { Op } = require("sequelize");


async function abreadd(req,res){
    res.render('aluno/add.ejs',{});

}

async function add(req,res){
    const{nome ,turma, email ,senha, } = req.body;
    if(req.file != undefined){

        var foto = req.file.filename;
    }


    await Aluno.create({nome,turma,email,senha,foto}).then((aluno)=>{
        req.flash("msg", "O aluno" + aluno.nome +"foi adicionado com sucesso!!!");
        res.redirect('/admin1/aluno')
      
    });
    

}

async function list(req,res){
    await Aluno.findAll().then((alunos) => {
    res.render("aluno/list1.ejs",{Alunos:alunos, msg:req.flash("msg")})

    });
}
async function filtro(req,res){
    const pesquisar= req.body.pesquisar;
    const alunos = await Aluno.findAll({
        where: {nome:{
        [Op.iLike]: "%"+pesquisar+"%"

        } },
    });
    res.render("aluno/list1.ejs",{Alunos:alunos})

}

async function abreedit(req,res){

}
async function edit(req,res){

}
async function del(req,res){
    const deletar = req.params.id;
    Aluno.destroy({where:{id:deletar}}).then(()=>{
        req.flash("msg", "O aluno foi deletado com sucesso!!!");
        res.redirect('/admin1/aluno')
    });
}



module.exports= {abreadd, add,list, filtro, abreedit, edit, del}





