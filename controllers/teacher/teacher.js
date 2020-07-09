exports.getHome = (req,res,next) => {

            console.log('second on1');
            res.render('./teacher/home',{
                pageTitle:'Home',
                user:req.session.user.name
            });
};

exports.getApproval = (req,res,next) => {
        res.render('./teacher/approval',{
            pageTitle:'Approval status'
        });

};
exports.postApproval = (req,res,next) => {
    res.render('./teacher/approval',{
        pageTitle:'Approval status'
    });

};

// exports.getTest=(req,res,next)=> {
    
//     res.render('teacher/test',{
//         pageTitle:"TEst"
//     });

// }
// exports.getTest2=(req,res,next)=> {
//     // const image=req.file;
    
//         const imageUrl="images/2020-07-08T19:59:14.886Z-82656.jpg";
//         res.render('teacher/test2',{
//             pageTitle:"TEst",
//             imageUrl:imageUrl
//         });
    
    
    
// }

// exports.postTest=(req,res,next)=> {

//     const image=req.file;
//     if(!image)
//     {
//         res.send("Error Msg");
//     }
//     else
//     {
//         const imageUrl=image.path;
//         console.log(imageUrl);
//         res.send("Success");
//     }

// }