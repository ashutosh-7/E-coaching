
module.exports = (req,res,next)=> {

    console.log("in middlrser");
    if(!req.session.isTeacherLoggedIn)
    {
        res.redirect('/teacher/login');
    }
    next();
};
