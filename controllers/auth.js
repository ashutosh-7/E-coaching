
exports.getLogin =(req,res,next)=> {
        res.render('auth/login',{
        pageTitle:'Login',
    });

}; 

exports.getRegister =(req,res,next)=> {
    res.render('auth/register',{
        pageTitle:'Register',
    });
    
}; 



exports.postLogin =(req,res,next)=> {
    
}; 



exports.postRegister =(req,res,next)=> {
    
}; 
