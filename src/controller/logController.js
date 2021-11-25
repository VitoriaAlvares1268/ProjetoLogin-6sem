const passport = require("../config/passport");

async function abrelog(req,res){
    res.render('index1.ejs',{"msg": req.flash("msg")});

}
const log = passport.authenticate("local",
{successRedirect: "/admin1/aluno/", 
failureRedirect: "/admin1", 
failureflash: true,
});

module.exports = {
    
    abrelog,
    log

};
