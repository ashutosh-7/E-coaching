module.exports = (req,res,next) => {

    if(req.session.isTeacherLoggedIn)
    {
            return res.redirect('/teacher/home');
    }
    next();
};