

exports.getHome = (req,res,next) => {
    
    // console.log(req.session.user);
    res.render('./student/home',{
        pageTitle:"Home",
        user:req.session.user.name
    });
        
};


