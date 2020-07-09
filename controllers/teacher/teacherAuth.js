const bcrypt = require('bcryptjs');
const Teacher = require('../../models/Teacher');





exports.getLogin =(req,res,next)=> {
        
        if(req.session.isTeacherLoggedIn)
        {
            res.render('teacher/home/',{
                pageTitle:'Home',
            });
        }
        res.render('teacher/auth/login',{
        pageTitle:'Login',
    });

}; 

exports.getRegister =(req,res,next)=> {
    res.render('teacher/auth/register',{
        pageTitle:'Register',
    });
    
}; 



exports.postRegister =(req,res,next)=> {


    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const password2=req.body.password2;
    const linkdinUrl= req.body.linkdin;
    const resume = req.file;
    const resumeUrl= resume.path;

    let errors =[];

    if(!name || !email || !password || !password2 ||!resume)
    {
        errors.push({msg:"Please fill all the fields or upload correct pdf resume."});
    }

    if(password!==password2)
    {
        errors.push({msg:'Passwords do not match'});
    }

    if(password.length<5)
    {
        errors.push({msg:'Passwords should be atleast 6 characters'});
    }

    if(errors.length>0)
    {
        res.render('teacher/auth/register',{
            pageTitle:'Register',
            errors,
            name,
            email,
            password,
            password2,
            linkdinUrl,
            resumeUrl
        });
    }
    else
    {
        Teacher.findOne({email:email})
        .then(user=>{
            if(user)
            {
                    errors.push({msg:'Teacher is already resisterd with this email.'});
                    res.render('teacher/auth/register',{
                    pageTitle:'Register',
                    errors,
                    name,
                    email,
                    password,
                    password2,
                    linkdinUrl,
                    resumeUrl
        
                });
            }
            else
            {
                const newUser= new Teacher({   //instance of the user model
                    name,
                    email,
                    password,
                    linkdinUrl,
                    resumeUrl
                });
                
                //hasing password and saving user in database
                bcrypt.genSalt(10,(err,salt)=>{
                    bcrypt.hash(newUser.password,salt,(err,hash)=> {
                        if(err)
                        throw err;

                        newUser.password=hash;

                        newUser.save()
                        .then(user => {
                            req.flash('success_msg','You are registered Successfully!');
                            res.redirect('/teacher/login');
                        })
                        .catch(err=> {
                            console.log(err);
                        });
                    })
                });
            }
        })
        .catch(err=>{
            console.log(err);
        });
    }

    
    
    
}; 



exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
   
     Teacher.findOne({ email: email })
      .then(user => {
        if (!user) {
          req.flash('error_msg','This is not registerd email Id.');
          return res.redirect('/teacher/login');
        }
        bcrypt
          .compare(password, user.password)
          .then(doMatch => {
            if (doMatch) {
              req.session.isTeacherLoggedIn = true;
              req.session.user = user;
              
              return req.session.save(err => {
                console.log(err);
                console.log(req.session.user);
                console.log('first on1');
                res.redirect('/teacher/home');
              });
            }
            req.flash('error_msg','Wrong Password.');
            res.redirect('/teacher/login');
          })
          .catch(err => {
            console.log(err);
            req.flash('error_msg','Something wrong happened , please retry again.');
            res.redirect('/teacher/login');
          });
      })
      .catch(err => console.log(err));

  };
  

  exports.postLogout = (req, res, next) => {
      console.log(req.session.isTeacherLoggedIn);
    req.session.destroy(err => {
      console.log(err);
      res.redirect('/');
    });
  };