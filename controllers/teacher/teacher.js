
exports.getApproval = (req,res,next) => {
        res.render('./teacher/approval',{
            pageTitle:'Approval status'
        });

};
exports.postApproval = (req,res,next) => {
    res.render('teacher/approval',{
        pageTitle:'Approval status'
    });

};