var passport1 = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const Aluno = require('../model/Aluno');


  passport1.serializeUser(function(user,done){
      done(null, user.id)
  });

  passport1.deserializeUser(function(id, done){
    Aluno.findByPk(id).then(function(user,err){
             done(err, user)

    })
  });
    
   
passport1.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senha',
    passReqToCallback: true

},
  function(req, username, password, done) {
      Aluno.findOne({where:{email: username}}).then(function(user, err){
          if(err){
            return done(err);
          }
          if(!user){
              return done(null, false, req.flash('msg',"Aluno não existe!"));
          }
          if(user.senha != password){
            return done(null, false, req.flash('msg',"Senha Incorreta"));

          }
         return done(null, user);
      });
    
  }
));
module.exports = passport1;
