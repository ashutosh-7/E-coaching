

exports.getHome = (req,res,next) => {
    
    res.render('./student/home',{
        pageTitle:"Home",
        user:req.session.user.name
    });
        
};


