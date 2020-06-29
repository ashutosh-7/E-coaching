
exports.getIndex = (req,res,next)=> {

       console.log(req.session.isLoggedin);
        res.render('./index',{
        pageTitle:"Home",
        
    });
}