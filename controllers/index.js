

exports.getIndex = (req,res,next)=> {

        if(req.session.isLoggedIn)
        {   
            res.render('student/home',{
            pageTitle:'Home',
            user:req.session.user.name
            });
        }
        res.render('index',{
        pageTitle:"Index",
    });
}