exports.aut= function aut(){
    return function(req,res,next){
        if(req.isAuthenticated()){
            return next();
        }
            req.flash('msg',"Você deve se logar para acessar esse link!");
            res.redirect('/admin1');
        

    };
};